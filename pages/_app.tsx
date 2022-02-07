import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/loading.css";
import dynamic from "next/dynamic";
import TailwindSSRPurge from "../src/components/helpers/tailwindcssSSRpurge";
import SideNav from "../src/containers/sidenav";
import Image from "next/image";

const TopProgressBar = dynamic(
  () => {
    return import("../src/components/TopProgressBar");
  },
  { ssr: false }
);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Image src="/v2/vectors/hangingbulbs.svg" layout="fill" objectPosition={500} />
      <TopProgressBar />
      <TailwindSSRPurge/>
      <SideNav type="left"/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
