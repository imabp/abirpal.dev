import Image from "next/image";
const AudioCard = () => {
  return (
    <>
      <div className="bg-accent flex w-4/5 ipad:w-3/5 rounded-md">
        <div className="p-4 ">
          <Image
            className="cursor-pointer"
            src="/assets/about/playbtn.svg"
            height="100%"
            width="100%"
          />
        </div>
        <div className="p-4 text-left text-white w-full ipad:w-4/5 ipad:text-fs24 ipadpro:text-fs35 iphones:text-fs18 flex flex-col justify-center ">
          Curiosity Drives Inspiration and Opportunities
        </div>
      </div>
    </>
  );
};
export default AudioCard;
