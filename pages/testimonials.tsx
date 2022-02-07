import { RecommendationCardProps } from "../src/components/about/recommendation";
import Layout from "../src/components/Layout/index";
import { getStory } from "../src/lib/storyblok";
import { GetServerSidePropsContext } from "next";
import { CardProps } from "../src/components/about/card";

import Recommendations from "../src/containers/aboutpage/recommendations";

interface AboutPageProps {
  recommendations: RecommendationCardProps[];
}

const About = ({ recommendations }: AboutPageProps) => {
  return (
    <>
      <Layout>
        <Recommendations recommendations={recommendations} />
      </Layout>
    </>
  );
};
export default About;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { story } = await getStory(undefined, undefined, "about");

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
      recommendations: recommendations,
    },
  };
}
