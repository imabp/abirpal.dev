import { useState } from "react";
import type { NextPage } from "next";
import MenuOverlay from "../src/components/mobile/overlay";
import Head from "next/head";
import largeCircle from "./../public/assets/home/imabpImage.svg";
import NavButton from "../src/components/mobile/navbutton";
import Footer from "../src/components/Footer";
import TwitterHeader from "../src/containers/homepage/twitterheader";
import NameAndTitle from "../src/containers/homepage/namesection";
import AvatarSection from "../src/containers/homepage/avatarsection";
import RouteCards from "../src/containers/homepage/routecards";
import { motion } from "framer-motion";
const Home: NextPage = () => {
  const [overlay, setOverlay] = useState(false);

  return (
    <>
      <Head>
        <title>Abir Pal - Developer, Writer, Creator</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="h-screen w-full relative bg-wave-pattern bg-contain  bg-no-repeat bg-bottom">
        <div
          id="mobileMenu"
          className="
          iphones:rounded-md
          iphones:block iphones:fixed iphones:bottom-2 iphones:right-2
          iphonex:rounded-md iphonex:block iphonex:fixed iphonex:bottom-2 iphonex:right-2
          desktop:hidden

          "
        >
          <NavButton overlay={overlay} setOverlay={setOverlay} />
        </div>
        {overlay && (
          <div className="z-99 transition-all overflow-hidden">
            <motion.div
              animate={{ x: [700, 0] }}
              transition={{ duration: 0.5 }}
            >
              <MenuOverlay />
            </motion.div>
          </div>
        )}
        {!overlay && (
          <>
            <div className="text-center pt-12 ml-10 mr-10">
              <TwitterHeader handle="imabptweets" />
              <AvatarSection avatar={largeCircle} />
              <NameAndTitle
                first="Abir"
                last="Pal"
                title="Software Engineer and Developer Relations"
              />
              <RouteCards />
            </div>
            <div className="iphones:hidden iphonex:block ipad:block ipadpro:block desktop:block">
              <Footer />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
