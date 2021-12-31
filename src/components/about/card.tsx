import Image from "next/image";

export type CardProps = {
  company?: string;
  title?: string;
  type: "job" | "community" | "tool";
  timeline?: string;
  image?: string;
};
export const Card = ({
  company,
  title,
  timeline,
  type = "job",
  image,
}: CardProps) => {
  switch (type) {
    case "job":
      return (
        <>
          <CommunityOrJobCard type="job" company={company} title={title} />
        </>
      );
    case "tool":
      return (
        <>
          <ToolOrFrameworkCard type="tool" image={image} />
        </>
      );
    default:
      return (
        <>
          <CommunityOrJobCard type="job" company={company} title={title} />
        </>
      );
  }
};
const ToolOrFrameworkCard = ({ image }: CardProps) => {
  return (
    <>
      <div
        className="bg-white rounded-md h-98 border-secondary border-2 mb-3
    w-16 h-16 
    cursor-pointer 
    "
      >
        <Image src={image as string} height={60} width={60} layout="fixed" />
      </div>
    </>
  );
};

const CommunityOrJobCard = ({ company, title }: CardProps) => {
  return (
    <>
      <div
        className="bg-white rounded-md h-98 border-secondary border-2 mb-3
    w-full
    p-3 
    flex flex-col 
    cursor-pointer hover:bg-secondary hover:border-primary hover:border-2 hover:ease-in
    "
      >
        <div className=" w-full flex justify-between">
          <div className="text-primary">{company ? company : "Company"}</div>
        </div>
        <div className="w-full mt-2">
          {title ? <div className="text-fs16">{title}</div> : "Position"}
        </div>
      </div>
    </>
  );
};
export default Card;
