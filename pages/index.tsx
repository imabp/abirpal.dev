import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../src/components/Layout";
import Storyblok from "./../src/lib/storyblok";
import largeCircle from "./../public/assets/home/imabpImage.svg";
import DynamicComponent from "../src/components/DynamicComponent";
import RouteCard from "../src/components/homepage/routecard";
import NavButton from "../src/components/mobile/navbutton";
import Footer from "../src/components/Footer";
import routesConfig from "../src/routes.config";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Abir Pal - Developer, Writer, Creator</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-screen w-screen relative bg-wave-pattern bg-no-repeat bg-bottom">
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
          desktop:hidden
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
            galaxyfold:hidden
            iphones:hidden
            iphonex:hidden
            ipad:hidden
            ipadpro:hidden
            ipad:flex ipadpro:flex desktop:flex
       "
            >
              {routesConfig.routes.map((route) => {
                return (
                  <RouteCard
                    title={route.title}
                    route={route.route}
                    key={route.route}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="iphones:hidden iphonex:block ipad:block ipadpro:block desktop:block">
          <Footer />
        </div>
      </div>
    </>
  );
};


export default Home;
