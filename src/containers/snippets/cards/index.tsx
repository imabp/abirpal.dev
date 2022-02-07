import QuadrantCircleVector from "../../../../public/system/vectors/quadrantPrimary.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export type SnippetCardProps = {
  title: string;
  fullslug: string;
  type?: "landscape" | "potrait" | string;
  uuid?: string;
};

const viewportClasses = `iphones:text-fs18 iphonex:text-fs30 
ipadpro:text-fs24 ipad:text-fs24
desktop:text-fs24`;
const backgroundImageClass = `bg-snippet-card bg-no-repeat bg-right-bottom`;
const LandscapeCard = ({ title, fullslug, uuid }: SnippetCardProps) => {
  return (
    <>
      <div
        className={`${viewportClasses} ${backgroundImageClass} ipad:w-96 ipad:h-44  relative bg-white
    iphones:w-64 iphones:h-36 iphonex:w-64 iphonex:h-36 
    rounded-md
    `}
      >
        <p className="p-4">{title ? title : <>"lorem ipsum"</>}</p>
        <Link href={`/${fullslug}?uuid=${uuid}`} passHref>
          <p
            className=" cursor-pointer m-4 mt-2 text-center text-secondary rounded-md bg-accent  text-fs18 p-1
                          iphones: w-2/3 iphonex:w-2/3 ipad:w-1/3
                          "
          >
            <a> View More</a>
          </p>
        </Link>
      </div>
    </>
  );
};

const PortraitCard = ({ title, fullslug, uuid }: SnippetCardProps) => {
  return (
    <>
      <div
        className={`${viewportClasses}  ${backgroundImageClass}  relative bg-white rounded-md bg-snippet-card
        iphones:w-44 iphones:h-56
        iphonex:w-44 iphonex:h-56
        ipad:w-56 ipad:h-64
        `}
      >
        <p className="p-4 z-4">{title ? title : <>"lorem ipsum"</>}</p>
        <Link href={`/${fullslug}?uuid=${uuid}`} passHref>
          <p className="cursor-pointer absolute bottom-0 left-0 z-4 m-4 mt-4 text-center text-secondary rounded-md bg-accent w-2/3 text-fs18 p-1">
            <a> View More</a>
          </p>
        </Link>
      </div>
    </>
  );
};

const SnippetDisplayCard = ({
  title,
  fullslug,
  type,
  uuid,
}: SnippetCardProps) => {
  switch (type) {
    case "v2":
      return (
        <Link href={`/${fullslug}?uuid=${uuid}`} passHref>
          <motion.div 
                  whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.2 },
                  }} key={uuid} className="hover:border-primary cursor-pointer bg-browncustom border-2 border-white text-white w-full p-4 ipadpro:w-4/5  rounded-md">
            <div className="text-fs24">
              {title}
            </div>
          </motion.div>
        </Link>
      )

    case "landscape":
      return (
        <>
          <LandscapeCard title={title} fullslug={fullslug} uuid={uuid} />
        </>
      );
    case "potrait":
      return (
        <>
          <PortraitCard title={title} fullslug={fullslug} uuid={uuid} />
        </>
      );
    default:
      return (
        <>
          <PortraitCard title={title} fullslug={fullslug} uuid={uuid} />
        </>
      );
  }
};
export default SnippetDisplayCard;
