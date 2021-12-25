import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../src/components/Layout";
import Storyblok from "./../src/lib/storyblok";
import largeCircle from "./../public/assets/home/imabpImage.svg";
import DynamicComponent from "../src/components/DynamicComponent";
import RouteCard from "../src/components/homepage/routecard";
import NavButton from "../src/components/mobile/navbutton";

const Home: NextPage = (storyobject: any) => {
  return (
    <>
      <Head>
        <title>Abir Pal - Developer, Writer, Creator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        id="wave"
        className=" 
    absolute bottom-0 left-0 right-0 translate-y-1/4
    w-full h-full
    "
      >
        <Image src="/assets/wave.svg" layout="fill" />
      </div>
      <div className="h-screen w-screen relative">
        <div className="z-20 text-center pt-12 ml-10 mr-10">
          <div
            className="
           iphones:text-fs18  iphonex:text-fs24 
           ipadpro:text-fs35 ipad:text-fs35 
           desktop:text-fs35
           flex flex-col
           pb-12
           "
          >
            <div className="block">
              <Image
                src="/assets/socials/twitter.svg"
                alt="twitter@imabptweets"
                height="25px"
                width="25px"
                // placeholder="blur"
                layout="fixed"
                // sizes="10vw"
              />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/imabptweets"
            >
              @imabptweets
            </a>
          </div>

          <div>
            <Image
              src={largeCircle}
              alt="Abir Pal Image"

              // width={500} automatically provided
              // height={500} automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>

          <div>
            <div
              className="
           iphones:text-fs44  iphonex:text-fs50 
           ipadpro:text-fs64 ipad:text-fs64
           desktop:text-fs64
           flex flex-col
          "
            >
              Abir Pal
            </div>
            <div
              className="
           iphones:text-fs18 iphonex:text-fs30 
           ipadpro:text-fs50 ipad:text-fs50
           desktop:text-fs50
           flex flex-col
          "
            >
              Software Engineer and Developer Relations
            </div>
          </div>
          <div
            id="mobileMenu"
            className="
          iphones:rounded-md
          iphones:block iphones:absolute iphones:bottom-2 iphones:right-2
          iphonex:rounded-md iphonex:block iphonex:absolute iphonex:bottom-2 iphonex:right-2
          ipad:hidden ipadpro:hidden desktop:hidden
          "
          >
            <NavButton />
          </div>
          <div
            className="
        flex
        justify-center
        mt-10
        overflow-x-auto
        "
          >
            <div
              className="
            flex
            justify-around
            w-1/2
            overflow-x-auto
            iphones:hidden
            iphonex:hidden
            ipad:flex ipadpro:flex desktop:flex
       "
            >
              <RouteCard title="About" route="/about" />
              <RouteCard title="Snippets" route="/snippets" />
              <RouteCard title="Guestbook" route="/guestbook" />
              <RouteCard title="Talks and Shows" route="/talks" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getStaticProps({ preview = false }) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
  // load the published content outside of the preview mode
  let sbParams = {
        version:process.env.STORYBLOK_VERSION
  };

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);
  console.log(data);
  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 2, // revalidate every 2 seconds
  };
}

export default Home;
