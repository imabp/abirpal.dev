import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/loading.css";
import dynamic from "next/dynamic";
import TailwindSSRPurge from "../src/components/helpers/tailwindcssSSRpurge";

const TopProgressBar = dynamic(
  () => {
    return import("../src/components/TopProgressBar");
  },
  { ssr: false }
);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopProgressBar />
      <TailwindSSRPurge/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
