import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { home } from "../routes.config";
import TailwindSSRPurge from "./helpers/tailwindcssSSRpurge";
import NavButton from "./mobile/navbutton";
import { useState } from "react";
import MenuOverlay from "./mobile/overlay";
import { motion } from "framer-motion";
import SideNav from "../containers/sidenav";
import MobileNavContainer from "../containers/mobileNav";
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  slug?: string;
  bgPattern?: boolean;
  footer?: boolean | undefined;
  aboutpage?: boolean;
  guestbook?: boolean;
}

const Layout = ({
  children,
  title,
  slug,
  bgPattern,
  footer,
  aboutpage = false,
  guestbook = false,
}: LayoutProps) => {
  const [overlay, setOverlay] = useState(false);

  if (footer === undefined) {
    footer = true;
  }
  return (
    <div
      className="bg-gradient-to-b min-h-screen h-full from-GRADIENT_BlackTop to-GRADIENT_BlackDown"
    >
      <div
        className={`w-full min-h-screen h-full m-0 p-0 
      
      text-white
    ${bgPattern
            ? guestbook
              ? "bg-layout-pattern bg-repeat-x bg-top "
              : "bg-layout-pattern bg-repeat-x	 bg-bottom"
            : ""
          } 
    `}
      >
        <Head>
          <title>Abir Pal - Developer, Writer, Creator</title>
          <link rel="icon" href="/favicon.svg" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <SideNav />
        <MobileNavContainer overlay={overlay} setOverlay={setOverlay}/>

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
            <div
            className="min-h-screen"
            >
              <div
                id="header"
                className={` pt-8 mb-5 
          iphones:ml-5 iphonex:ml-10
          iphones:mr-5 iphonex:mr-10
          ipad:ml-15 ipadpro:ml-15 desktop:ml-15
          ipad:mr-15 ipadpro:mr-15 desktop:mr-15
      `}
              >
                {aboutpage && (
                  <div
                    className="
            iphones:ml-8 iphonex:ml-10
            ipad:ml-16 ipadpro:ml-16 desktop:ml-16 desktop:mr-16
            "
                  >
                    <p
                      className="
            text-center
            iphones:text-fs44  iphonex:text-fs50 
           ipadpro:text-fs50 ipad:text-fs50
           desktop:text-fs50
           
           "
                    >
                      {title}
                    </p>
                    <p className="text-center ">
                      <Link href={home.route} passHref>
                        <Image
                          className="cursor-pointer"
                          src="/system/vectors/home.svg"
                          layout="fixed"
                          height="24"
                          width="24"
                        />
                      </Link>
                    </p>
                  </div>
                )}

                {!aboutpage && (
                  <p
                    className="iphones:text-fs44  iphonex:text-fs50 
           ipadpro:text-fs50 ipad:text-fs50
           desktop:text-fs50"
                  >
                    {title ? title : <p className="invisible">invisible_title</p>}
                    {title && (
                      <span className="iphones:text-fs24 cursor-pointer ml-5">
                        <Link href={home.route} passHref>
                          <Image
                            src="/system/vectors/home.svg"
                            layout="fixed"
                            height="24"
                            width="24"
                          />
                        </Link>
                      </span>
                    )}
                  </p>
                )}

                <p
                  className="iphones:text-fs18 iphonex:text-fs30 
           ipadpro:text-fs24 ipad:text-fs24
           desktop:text-fs24"
                >
                  {slug ? slug : <p className="invisible">invisible_slug</p>}
                </p>
                {slug && (
                  <Image
                    src="/system/vectors/line.svg"
                    layout="responsive"
                    width="96vw"
                    height="2px"
                  />
                )}
              </div>

              
              <main
                className="h-full min-h-screen
                          iphones:ml-8 iphonex:ml-10
                          ipad:ml-16 ipadpro:ml-16 desktop:ml-16 desktop:mr-16
                          "
              >
                {children}
              </main>
              {/* {footer ? (
        <>
          <Footer />
        </>
      ) : (
        <></>
      )} */}
            </div>
          )}
     
      </div>
    </div>
  );
};

export default Layout;
