import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Image from "next/image";
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  slug?: string;
  bgPattern?: boolean;
  footer?: boolean | undefined;
}

const Layout = ({ children, title, slug, bgPattern, footer }: LayoutProps) => {
  if (footer === undefined) {
    footer = true;
  }
  return (
    <div
      className={`w-screen h-screen m-0 p-0
    ${bgPattern ? "bg-layout-pattern bg-repeat-x	 bg-bottom" : ""} 
    `}
    >
      <Head>
        <title>Abir Pal - Developer, Writer, Creator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
        <div
          id="header"
          className={` mt-8 mb-5 
          iphones:ml-5 iphonex:ml-10
          iphones:mr-5 iphonex:mr-10
          ipad:ml-15 ipadpro:ml-15 desktop:ml-15
          ipad:mr-15 ipadpro:mr-15 desktop:mr-15
      `}
        >
          <p
            className="iphones:text-fs44  iphonex:text-fs50 
           ipadpro:text-fs50 ipad:text-fs50
           desktop:text-fs50"
          >
            {title ? title : <p className="invisible">invisible_title</p>}
          </p>

          <p
            className="iphones:text-fs18 iphonex:text-fs30 
           ipadpro:text-fs24 ipad:text-fs24
           desktop:text-fs24"
          >
            {slug ? slug : <p className="invisible">invisible_slug</p>}
          </p>
          {title && (
            <Image
              src="/system/vectors/line.svg"
              layout="responsive"
              width="96vw"
              height="2px"
            />
          )}
        </div>
      </>
      <main
        className="
      iphones:ml-8 iphonex:ml-10
      ipad:ml-16 ipadpro:ml-16 desktop:ml-16 desktop:mr-16
      "
      >
        {children}
      </main>
      {footer ? (
        <>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Layout;
