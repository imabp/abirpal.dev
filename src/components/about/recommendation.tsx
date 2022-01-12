import Image from "next/image";

export type RecommendationCardProps = {
  name: string;
  title: string;
  recommendation: string;
  image: string;
};
const RecommendationCard = ({
  name,
  title,
  recommendation,
  image,
}: RecommendationCardProps) => {
  return (
    <>
      {console.log(image)}
      <div
        id={`lang-card-${name}`}
        className="bg-white hover:bg-secondary cursor-pointer rounded-md p-5 w-full iphones:mr-3 ipadpro:m-10"
      >
        <div className="flex flex-row">
          <div className="mr-5">
            <img className="rounded-full" src={image} height="70" width="70" />
          </div>
          <div>
            <p className="font-bold">{name}</p>
            <p className="font-italics w-4/5">{title}</p>
          </div>
        </div>
        <div className="mt-2 w-full text-justify">{recommendation}</div>
      </div>
    </>
  );
};
export default RecommendationCard;
