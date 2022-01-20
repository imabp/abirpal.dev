import StoryblokClient, { StoryData } from "storyblok-js-client";
import { useState, useEffect } from "react";
import { commentTYPE } from "../../components/guestbook/comments";
const spaceId = process.env.STORYBLOK_SPACE_ID;

// 2. Initialize the client with the oauth token
// from the my account area at https://app.storyblok.com
let Storyblok = new StoryblokClient({
  oauthToken: process.env.STORYBLOK_OAUTH_TOKEN,
});
export type PayloadType = Record<string, any>;

const MapStorySlugToID: {
  [key: string]: number;
} = {
  GUESTBOOK: 99213804,
};
export const preapareCommentPayload = (
  slug: string,
  comments: commentTYPE[]
) => {
  return {
    story: {
      name: "guestbook",
      slug: `${slug}`,
      id: MapStorySlugToID["GUESTBOOK"],
      content: {
        component: "page",
        body: comments,
      },
    },
    force_update: 0,
    publish: 1,
  };
};

export const UpdateExistingStory = async (
  storyslug: string,
  payload: PayloadType
) => {
  try {
    if (!MapStorySlugToID[storyslug.toUpperCase()])
      throw new Error("Not Found");
    let requestPayload;

    switch (storyslug) {
      case "guestbook":
        requestPayload = preapareCommentPayload("guestbook", payload.comments);
    }
    console.log("RESP", requestPayload);
    const response = await Storyblok.put(
      `spaces/${spaceId}/stories/${MapStorySlugToID[storyslug.toUpperCase()]}`,
      requestPayload
    );
    console.log("RESPONSE", response);
    if (response.data.story.uuid) {
      console.log(response.data.story.content.body);
      return "STORY DIDNT UPLOAD";
    }
  } catch (error: any) {
    console.log(error.message);
    return error.message;
  }
};
