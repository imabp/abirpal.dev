import Image from "next/image";
interface TwitterHeaderProps {
  handle: string;
}
const TwitterHeader = ({ handle }: TwitterHeaderProps) => {
  return (
    <>
      <div
        className="
           relative
           iphones:text-fs18  iphonex:text-fs24 
           ipadpro:text-fs35 ipad:text-fs35 
           desktop:text-fs35
           flex flex-col
           pb-12
           "
      >
        <div className="">
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
          href={`https://twitter.com/${handle}`}
        >
          @{handle}
        </a>
      </div>
    </>
  );
};
export default TwitterHeader;
