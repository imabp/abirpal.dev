import { StoryData } from "storyblok-js-client";
import Layout from "../../src/components/Layout";
import Storyblok from "../../src/lib/storyblok";

export type TalksProps={
  stories:StoryData[];
}

const TalksHome = ({stories}:TalksProps) => {
  return <Layout title="talks/">
    {
      stories && stories.map((story:any)=>{
        return<> {story.slug} </>
      })
    }

  </Layout>;
};

export default TalksHome;

export async function getStaticProps(){
    let slug = 'talks'

    let sbParams = {
        "version":process.env.STORYBLOK_VERSION,
        "starts_with": `${slug}/`
    }
  let { data } = await Storyblok.get(`cdn/stories`, sbParams);
  return {
    props: {
      stories: data ? data.stories as StoryData[] : null,
    },
    revalidate: 10, // revalidate every 10 seconds
  };
    }