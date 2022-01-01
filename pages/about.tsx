import Card from "../src/components/about/card";
import LangCard, { LangCardProps } from "../src/components/about/langCard";
import Layout from "../src/components/Layout";
import { getLinks, getStory, getStoryResponse } from "../src/lib/storyblok";
import { GetServerSidePropsContext } from "next";
const ASSETS_PATH = "/assets/about";
import { CardProps } from "../src/components/about/card";

interface AboutPageProps {
  jobCards: CardProps[];
  langCards: LangCardProps[];
}

const About = ({ jobCards, langCards }: AboutPageProps) => {
  return (
    <>
      <Layout title="about" aboutpage={true}>
        <div className="flex justify-center">
          <div className=" w-full ">
            <div className="grid grid-cols-2 gap-4 w-full justify-center mb-5 ">
              <div className="pl-5 ">
                <p className="text-fs24 text-left w-3/5 mx-auto">
                  Wonderful experiences and workplaces I have been part of.
                </p>
              </div>
              <div id="jobs" className="w-3/5 ">
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

            {/* IMPORTANT: DO NOT REMOVE THIS, AS TAILWIND PURGES THE UNUSED CLASSES . */}
            {/* THESE CLASSES ARE SERVER SIDE, AND APPLIES DURING RUNTIME. */}

            <div
              className="hidden 
            bg-lang-bg-golang
            bg-lang-bg-java
            bg-lang-bg-typescript
            bg-lang-bg-aws
            bg-lang-bg-reactjs
            bg-lang-bg-nextjs
            bg-lang-bg-tailwindcss
            bg-lang-bg-detacloud
            bg-lang-bg-cypress
            bg-lang-bg-docker
            bg-lang-bg-owasp
            bg-lang-bg-terraform
            "
            />

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
        </div>
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
