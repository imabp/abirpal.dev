import Image from "next/image";
import { RecommendationCardProps } from "../src/components/about/recommendation";
import Layout from "../src/components/Layout";
import { getStory } from "../src/lib/storyblok";
import { GetServerSidePropsContext } from "next";
const ASSETS_PATH = "/assets/about";
import { CardProps } from "../src/components/about/card";
import Experience from "../src/containers/aboutpage/experience";
import TechStack from "../src/containers/aboutpage/techstack";
import AudioCard from "../src/containers/aboutpage/audioCard";
import Recommendations from "../src/containers/aboutpage/recommendations";

interface AboutPageProps {
  jobCards: CardProps[];
  recommendations: RecommendationCardProps[];
}

const About = ({ jobCards, recommendations }: AboutPageProps) => {
  return (
    <>
      <Layout title="about" aboutpage={true}>
        <div className="flex flex-col justify-center  ">
          <Experience jobCards={jobCards} />
        </div>
        <div className="text-fs24 iphones:text-left ipad:text-center mt-16 mb-4">
          The audio clip that makes your day!
          <div className="flex w-full mt-5 ipad:justify-center">
            <AudioCard />
          </div>
        </div>
        <div className="flex w-full flex-col justify-center hidden iphonex:block  ">
          <TechStack />
        </div>
        <div>
          <p className="flex font-bold justify-center mt-20 text-fs24">
            Sounds Interesting?
          </p>
          <p className="flex font-bold justify-center mt-5 pb-10 text-fs18">
            contact@abirpal.dev
          </p>
          <div className="flex w-full justify-center">
            <a
              href="https://twitter.com/imabptweets"
              target="_blank"
              rel="noreferrer nopenner"
            >
              <Image src="/system/vectors/twitter.svg" height="40" width="40" />
            </a>
            <a
              href="https://github.com/imabp"
              target="_blank"
              rel="noreferrer nopenner"
            >
              <Image src="/system/vectors/github.svg" height="40" width="40" />
            </a>
            <a
              href="https://linkedin.com/in/imabp"
              target="_blank"
              rel="noreferrer nopenner"
            >
              <Image
                src="/system/vectors/linkedin.svg"
                height="40"
                width="40"
              />
            </a>
          </div>
        </div>
        <Recommendations recommendations={recommendations} />
      </Layout>
    </>
  );
};
export default About;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { story } = await getStory(undefined, undefined, "about");

  const jobCards: CardProps = story.content.body
    .filter((el: any) => el.component === "jobcard")
    .map((el: any) => {
      return {
        company: el.company,
        title: el.position,
        timeline: el.timeline,
        type: "job",
      };
    });
  const recommendations: CardProps = story.content.body
    .filter((el: any) => el.component === "recommendation")
    .map((el: any) => {
      return {
        name: el.name,
        title: el.title,
        recommendation: el.recommendation,
        image: el.image.filename,
      };
    });

  return {
    props: {
      jobCards: jobCards,
      recommendations: recommendations,
    },
  };
}
