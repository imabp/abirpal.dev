import Head from "next/head";
import LangCard, { LangCardProps } from "../src/components/about/langCard";
import Layout from "../src/components/Layout";
import { getLinks, getStory, getStoryResponse } from "../src/lib/storyblok";
import { GetServerSidePropsContext } from "next";
const ASSETS_PATH = "/assets/about";
import Card from "../src/components/about/card";
import { CardProps } from "../src/components/about/card";
import TailwindSSRPurge from "../src/components/helpers/tailwindcssSSRpurge";

interface AboutPageProps {
  jobCards: CardProps[];
  langCards: LangCardProps[];
}

const About = ({ jobCards, langCards }: AboutPageProps) => {
  return (
    <>
      <Head>
        <title>Abir Pal - Developer, Writer, Creator</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout title="about" aboutpage={true}>
        <div className="
        iphones:grid iphones:grid-cols-1 iphones:gap-4 iphones:w-full iphones:ml-3
        iphonex:grid iphonex:grid-cols-1 iphonex:gap-4 iphonex:w-full iphonex:mr-3 iphonex:ml-0
        ipad:grid ipad:grid-cols-2 ipad:gap-4 ipad: w-full ipad: ml-48 ipad:mr-52
        ipadpro:grid ipadpro: grid-cols-2 ipadpro:gap-4 ipadpro: w-full ipadpro: ml-54 ipadpro:mr-52
        desktop: grid desktop
        ">
          <div id="jobText">
            <p className="
                iphones:w-full iphonex:w-full ipad:w-3/5 ipadpro:w-4/5
               
                text-left 
                desktop:mx-auto">
              <p className="
                    iphones:text-fs16 iphonex:text-fs18
                   ipad:text-fs24 ipadpro:text-fs24 desktop:text-fs24">

                Wonderful experiences and workplaces I have been part of.
              </p>

              <p className="p-3 mt-10 text-fs16
                    iphones:mt-3 iphonex:mt-5 ipad:mt-10 ipadpro:mt-10 desktop:mt-10
                   iphones:w-3/5 iphonex:w-3/5 ipad:w-4/5 ipadpro:w-4/5 desktop:w-2/5
                  flex justify-center cursor-pointer rounded-sm text-secondary bg-primary
                  ">
                View Resume
              </p>
            </p>
          </div>
          <div id="jobcards"
            className="
           iphones:w-4/5
           ipad:w-4/5
           ipadpro:w-4/5
           desktop:w-3/5
            "
          >
            {jobCards.map((job) => {
              return (
                <Card
                  key={job.company?.trim()}
                  title={job.title as string}
                  company={job.company as string}
                  type={job.type as "job" | "community"}
                />
              );
            })}
          </div>

        </div>
        <div className="w-3/4">
          {/* <div className="
        iphones:grid iphones:grid-cols-1 iphones:gap-4 iphones:w-full iphones:ml-3
        iphonex:grid iphonex:grid-cols-1 iphonex:gap-4 iphonex:w-full iphonex:mr-3 iphonex:ml-0
        ipad:grid ipad:grid-cols-2 ipad:gap-4 ipad: w-full ipad: ml-48 ipad:mr-52
        ipadpro:grid ipadpro: grid-cols-2 ipadpro:gap-4 ipadpro: w-full ipadpro: ml-54 ipadpro:mr-52
        desktop: grid desktop
        "> */}
        <div className="w-full">
          {/* <div
            id="lang-cards"
            className="grid
                      iphones:grid iphones:grid-cols-2 gap-4 iphone:w-3/5 
                      iphonex:grid iphonex:grid-cols-2
                      ipadpro:grid ipadpro:grid-cols-3
        "
          > */}
            <div className="flex overflow-x-scroll
             
            ">

            {langCards.map((lang) => (
              <LangCard
                key={lang.name?.trim()}
                name={lang.name}
                bg={`bg-${lang.bg as string}`}
                fontMode={lang.fontMode}
              />
            ))}
          </div>
          </div>
          <div>

          </div>
        </div>

        {/* 

            <div className="grid grid-cols-2 gap-4 w-full justify-center">
              <div
                id="lang-cards"
                className="w-3/5 mx-auto pl-5
            grid grid-cols-3 gap-4 w-full justify-center
            "
              >
                {console.log(langCards[0].bg)}
                {langCards.map((lang) => (
                  <LangCard
                    key={lang.name?.trim()}
                    name={lang.name}
                    bg={`bg-${lang.bg as string}`}
                    fontMode={lang.fontMode}
                  />
                ))}
              </div>
              <div>
                <p className="text-fs24 text-left w-3/5 ">
                  Tech Stack I have experienced while working with them at
                  production level.
                </p>
                <p
                  className="relative bottom-0 right-0
              text-fs16 text-left w-3/5 mt-5"
                >
                  I feel solving problems and the purpose matters a lot! which
                  eventually demystifies and leads on foundations for a
                  framework.
                </p>
              </div>
            </div>
          </div>
        </div> */}
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

  const langCards: LangCardProps = story.content.body
    .filter((el: any) => el.component === "langcard")
    .map((el: any) => {
      return {
        name: el.name,
        bg: `lang-bg-${el.name.toLowerCase().trim()}`,
        fontMode: el.fontMode,
      };
    });
  return {
    props: {
      jobCards: jobCards,

      langCards: langCards,
    },
  };
}