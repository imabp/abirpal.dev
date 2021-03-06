import StoryblokClient, { StoryData } from "storyblok-js-client";
import { useState, useEffect } from "react";

declare global {
  interface Window {
    StoryblokBridge: FunctionConstructor;
  }
  interface Function {
    on: Function;
  }
}

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  cache: {
    type: "memory",
    clear: "auto",
  },
});

export type getStoryResponse = {
  story: StoryData | null;
  error?: undefined | string;
};

export const getLinks = async (slug?: string) => {
  let sbParams = {
    version: process.env.STORYBLOK_VERSION,
    starts_with: `${slug}/`,
  };
  let { data } = await Storyblok.get(`cdn/links/`, sbParams);
  const stories = Object.entries(data.links);
  return data ? stories : null;
};

export const getStory = async (
  uuid?: string,
  content?: string,
  slug?: string
): Promise<any> => {
  try {
    if (uuid) {
      const sbParams = {
        version: process.env.STORYBLOK_VERSION,
        find_by: "uuid",
      };

      const response = await Storyblok.get(`cdn/stories/${uuid}`, sbParams);
      return { ...response.data };
    } else if (slug && content) {
      const sbParams = {
        version: process.env.STORYBLOK_VERSION,
      };
      const fullSlug = content ? `${content}/${slug}` : `${slug}`;
      const response = await Storyblok.get(`cdn/stories/${fullSlug}`, sbParams);
      return { ...response.data };
    } else if (slug && !content) {
      const sbParams = {
        version: process.env.STORYBLOK_VERSION,
      };
      const response = await Storyblok.get(`cdn/stories/${slug}`, sbParams);
      return { ...response.data };
    } else throw new Error("NO SLUG or ID PRESENT");
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      return { story: null, error: err.message as string };
    }
  }
};

export const useStoryblok = (originalStory: StoryData, preview: boolean) => {
  const [story, setStory] = useState(originalStory);

  const initEventListeners = () => {
    const { StoryblokBridge } = window;
    if (typeof StoryblokBridge !== "undefined") {
      // initialize the bridge with your token
      const storyblokInstance = new StoryblokBridge();

      // reload on Next.js page on save or publish event in the Visual Editor
      storyblokInstance.on(["change", "published"], () => location.reload());

      // live update the story on input events
      storyblokInstance.on("input", (event: any) => {
        // check if the ids of the event and the passed story match
        if (story && event.story.content._uid === story.content._uid) {
          // change the story content through the setStory function
          setStory(event.story);
        }
      });

      storyblokInstance.on("enterEditmode", (event: any) => {
        // loading the draft version on initial enter of editor
        Storyblok.get(`cdn/stories/${event.storyId}`, {
          version: "draft",
        })
          .then(({ data }) => {
            if (data.story) {
              setStory(data.story);
            }
          })
          .catch((err) => {
            if (err instanceof Error) {
              console.log(err.message);
            }
          });
      });
    }
  };

  const addBridge = (cb: VoidFunction) => {
    const existingScript = document.getElementById("storyblokBridge");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "//app.storyblok.com/f/storyblok-v2-latest.js";
      script.id = "storyblokBridge";
      document.body.appendChild(script);
      script.onload = () => {
        cb();
      };
    } else {
      cb();
    }
  };
  useEffect(() => {
    // only load inside preview mode
    if (preview) {
      // first load the bridge, then initialize the event listeners
      addBridge(initEventListeners);
    }
  }, [originalStory, preview, setStory]); // runs the effect only once & defines effect dependencies

  useEffect(() => {
    setStory(originalStory);
  }, [originalStory]);

  return story;
};

export default Storyblok;
