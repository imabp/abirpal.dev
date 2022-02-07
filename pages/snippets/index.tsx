import Layout from "../../src/components/Layout/index";
import Storyblok, { getLinks } from "../../src/lib/storyblok";
import NetSPattern from "../../public/system/vectors/layoutPattern.svg"
import { StoryblokComponent, StoryData } from "storyblok-js-client";
import { useRouter } from "next/router";
import Image from "next/image"
import { ReactNode, useState } from "react";
import { getRandomColor } from "../../src/lib/helpers";
import { motion } from "framer-motion";
import SnippetDisplayCard from "../../src/containers/snippets/cards";
import Link from "next/link";
export type SnippetProps = {
  //[uuid : storydata]
  snippets: [string, StoryData][];
};
export type HeroCardData = {
  title: string
  description: ReactNode
  readmore?: string
}
const initialHeroCardData: HeroCardData = {
  title: "Sharing while building",
  description: <b>You liked it!<br /> Let’s connect on twitter: @imabptweets</b>
}
const SnippetHome = ({ snippets }: SnippetProps) => {

  const [heroCardData, setHeroCardData] = useState<HeroCardData>(initialHeroCardData)
  const onHoverHandler = (snippet: [string, StoryData<StoryblokComponent<string> & {
    [index: string]: any;
  }>]) => {
    setHeroCardData(
      {
        title: snippet[1].name,
        description:"Demo Title",
        readmore:snippet[0]
      }
    )
  }
  return (
    <Layout>
  

  <div className="w-full desktop:w-3/5 ipadpro:w-4/5 text-fs18 mt-12 ml-12 text-whitecustom ">
            <div className="grid gap-4 grid-cols-1 ipad:grid-cols-3 ipadpro:grid-cols-3 min-h-48 ">
                {
                    snippets.map((snippet: [string, StoryData]) =>
                        <SnippetDisplayCard
                            key={snippet[0]}
                            title={snippet[1].name}
                            fullslug={snippet[1].slug}
                            type="v2"
                            uuid={snippet[0]}
                        />)
                }


            </div>
           
        </div>
      {/* <div
        className="grid galaxyfold:grid-cols-1 
      iphones:grid-cols-1
      iphonex:grid-cols-1
      ipad:grid-cols-3
      ipadpro:grid-cols-3
      desktop:grid-cols-6"
      >
        {snippets.map((snippet) => (
          <SnippetDisplayCard
            key={snippet[0]}
            title={snippet[1].name}
            fullslug={snippet[1].slug}
            type="v2"
            uuid={snippet[0]}
          />
        ))}
      </div> */}
    </Layout>
  );
};
export default SnippetHome;

export async function getServerSideProps() {
  const stories = await getLinks("snippets");

  return {
    props: {
      snippets: stories,
    },
  };
}
SnippetDisplayCard