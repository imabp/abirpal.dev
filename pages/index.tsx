import { useState } from "react";
import Head from "next/head";
import About from "../src/v2/containers/homepage/about";
import RecentPosts, { RecentPostsType } from "../src/v2/containers/homepage/RecentPosts";
import Features from "../src/v2/containers/homepage/features";
import { getLinks } from "../src/lib/storyblok";
import Layout from "../src/components/Layout/index";
const Home = ({ snippets }: RecentPostsType) => {
  return (
    <>
      <Head>
        <title>Abir Pal - Developer, Writer, Creator</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>


      <Layout>
        <>
          <div className="w-4/5  mx-auto h-full">
            <About />
            <RecentPosts snippets={snippets} />
            <Features />
          </div>
        </>
      </Layout>
    </>
  );
};

export default Home;
export async function getServerSideProps() {
  const stories = await getLinks("snippets");
  const Top3stories = stories && [stories[0], stories[1], stories[2]]
  return {
    props: {
      snippets: Top3stories,
    },
  };
}