import RecommendationCard, {
  RecommendationCardProps,
} from "../../../components/about/recommendation";
interface RecommendationsProps {
  recommendations: RecommendationCardProps[];
}
const Recommendations = ({ recommendations }: RecommendationsProps) => {
  return (
    <>
      <p className="text-center text-gray-200 text-fs24 mt-10">
        <b>Its all about people, that builds a team, and then a company.
        <br /> Few awesome people whom I have worked with.</b>
      </p>
      <div className="iphones:w-full ipadpro:w-3/5 ipadpro:mx-auto 
      grid iphones:grid-cols-1 ipadpro:grid-cols-3 gap-6 ">
        {recommendations &&
          recommendations.map((el: RecommendationCardProps) => {
            return (
              <>
                <RecommendationCard
                  key={el.image}
                  name={el.name}
                  title={el.title}
                  recommendation={el.recommendation}
                  image={el.image}
                />
              </>
            );
          })}
      </div>
    </>
  );
};
export default Recommendations;
