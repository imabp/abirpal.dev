import { StoryData } from "storyblok-js-client";
import Layout from "../../src/components/Layout/index";
import Storyblok from "../../src/lib/storyblok";

export type TalksProps = {
  stories: StoryData[];
};

const TalksHome = ({ stories }: TalksProps) => {
  return (
    <Layout>
      <div className="ml-10">

      <p className="font-bold text-fs24">Coming Soon</p>
      <p className="mt-5 text-fs18 ipad:w-3/5 w-ful" >
        Developer Communities have been a special place, where developers, researchers, designers all come together
        to build something that can create impact in the community.<br/><br/>
        This section will be dedicated to community contributions, made so far in form of talks, memberships, open source organizations.
      </p>
      </div>
    </Layout>
  );
};

export default TalksHome;

export async function getStaticProps() {
  let slug = "talks";

  let sbParams = {
    version: process.env.STORYBLOK_VERSION,
    starts_with: `${slug}/`,
  };
  let { data } = await Storyblok.get(`cdn/stories`, sbParams);
  return {
    props: {
      stories: data ? (data.stories as StoryData[]) : null,
    },
    revalidate: 10, // revalidate every 10 seconds
  };
}
