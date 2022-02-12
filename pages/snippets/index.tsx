import Layout from "../../src/components/Layout/index";
import { getLinks } from "../../src/lib/storyblok";
import { StoryblokComponent, StoryData } from "storyblok-js-client";
import Image from "next/image"
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import SnippetDisplayCard from "../../src/containers/snippets/cards";
import Link from "next/link";
import { Audio } from  'react-loader-spinner'

import MarkdownViewer from "../../src/containers/markdownViewer";
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
  const [loading,setLoading] = useState(false);
  const [mdx, setMDX] = useState(`### Reading helps you to explore your curiosity!
  ![wallpaper](https://github.com/imabp/wallpapers/raw/main/collection/CachedImage_1920_1080_POS2.jpg)
  
  ****
  
  Choose a topic on left, to get started.
  `)
  const getMDX = async (uuid: string) => {
    setLoading(true)
    console.log(uuid);
    const response = await window.fetch('/api/getMDX', {
      method: "POST",
      body: JSON.stringify({ "uuid": uuid })
    })
    const data = await response.json();
    setLoading(false)
    setMDX(data.mdx)

  }
  const [heroCardData, setHeroCardData] = useState<HeroCardData>(initialHeroCardData)
  const onHoverHandler = (snippet: [string, StoryData<StoryblokComponent<string> & {
    [index: string]: any;
  }>]) => {
    setHeroCardData(
      {
        title: snippet[1].name,
        description: "Demo Title",
        readmore: snippet[0]
      }
    )
  }
  return (
    <Layout>
      <div className="w-full flex flex-row
  text-fs18 mt-12 ipadpro:ml-12 px-12 text-whitecustom ">
        <div className="relative">

          <div className="sticky top-12 grid iphones:grid-cols-1 grid-cols-3 gap-4 ">
            {
              snippets.map((snippet: [string, StoryData]) => {
                const title = snippet[1].name
                const fullslug = snippet[1].slug
                const type = "v2"
                const uuid = snippet[0]
                return <>
                  <motion.div
                    onClick={() => getMDX(uuid)}
                    key={uuid}
                    whileHover={{
                      scale: 1.04,
                      transition: { duration: 0.2 },
                    }} className="hover:border-primary cursor-pointer bg-browncustom border-2 border-white text-white w-full p-4 ipadpro:w-4/5  rounded-md">
                    <div className="text-fs24">
                      {title}
                    </div>
                  </motion.div>
                </>
              }
              )
            }
          </div>
        </div>
        <div>

        {loading && <div className="h-full w-full"> <Audio color="#E86383" /></div>}
          <div className="hidden desktop:block ">
            {!loading && <MarkdownViewer mdx={mdx} />}
            
          </div>
        </div>
      </div>
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