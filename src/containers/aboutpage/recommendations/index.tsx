import RecommendationCard, {
  RecommendationCardProps,
} from "../../../components/about/recommendation";
interface RecommendationsProps {
  recommendations: RecommendationCardProps[];
}
const Recommendations = ({ recommendations }: RecommendationsProps) => {
  return (
    <>
      <p className="text-center text-gray-200 mt-10">
        Its all about people, that builds a team, and then a company.
        <br /> Few awesome people whom I have worked with.
      </p>
      <div className="w-full grid iphones:mr-3 iphones:grid-cols-1 ipadpro:grid-cols-3 gap-5 ">
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
