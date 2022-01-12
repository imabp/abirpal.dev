import Head from "next/head";
import Layout from "../../../components/Layout";
import { getLinks, getStory, getStoryResponse } from "../../../lib/storyblok";
import { GetServerSidePropsContext } from "next";
const ASSETS_PATH = "/assets/about";
import Card from "../../../components/about/card";
import { CardProps } from "../../../components/about/card";
import TailwindSSRPurge from "../../../components/helpers/tailwindcssSSRpurge";
import Link from "next/link";
interface ExperiencePageProps {
  jobCards: CardProps[];
}

const Experience = ({ jobCards }: ExperiencePageProps) => {
  return (
    <>
      <div
        className="flex justify-center  w-full
        iphones:flex-col iphones:gap-5
        iphonex:flex-col iphonex:gap-5
        ipad:flex-row ipad:justify-center
        ipadpro:flex-row ipadpro:justify-center
        desktop:flex-row desktop:justify-center
        "
      >
        <div
          className="w-3/4 text-fs24 
          ipad:text-left 
          ipad:w-2/4
          desktop:w-1/4
          "
        >
          <div>Wonderful experiences and workplaces I have been part of</div>
          <Link passHref href="/">
            <p className=" text-center cursor-pointer p-4 w-2/3 mt-10 text-fs18 bg-primary text-white">
              View Resume
            </p>
          </Link>
        </div>
        <div
          id="jobcards"
          className="
        justify-center
            "
        >
          {jobCards.map((job) => {
            return (
              <Card
                customWidthClass="
                iphones:w-full
                iphonex:w-full
                ipad:w-full
                ipadpro:w-full
                desktop:w-full               
                "
                key={job.company?.trim()}
                title={job.title as string}
                company={job.company as string}
                type={job.type as "job" | "community"}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Experience;
