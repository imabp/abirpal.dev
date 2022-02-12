import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import TailwindSSRPurge from "../helpers/tailwindcssSSRpurge";
import NavButton from "../mobile/navbutton";
import MenuOverlay from "../mobile/overlay";
interface LayoutProps {
  children: React.ReactNode;
  className?: string

}
const Layout = ({ children, className }: LayoutProps) => {
  const [overlay, setOverlay] = useState(false);

  return <>
    <Head>
      <title>Abir Pal - Developer, Writer, Creator</title>
      <link rel="icon" href="/favicon.svg" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="bg-gradient-to-b from-GRADIENT_BlackTop to-GRADIENT_BlackDown min-h-screen ">

      <main
        className={`${className} desktop:pr-24 desktop:pl-24`}
      >
        <div className="
        text-white h-full  w-full relative  ">
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
          {!overlay && <div className="pt-10 pb-12"> {children}</div>}
        </div>
      </main>
    </div>

  </>
}

export default Layout;