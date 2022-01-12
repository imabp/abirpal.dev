import RouteCard from "../../../components/homepage/routecard";
import { routes } from "../../../routes.config";

const RouteCards = () => {
  return (
    <>
      <div
        className="
        flex
        justify-center
        mt-10
        overflow-x-auto
        "
      >
        <div
          className="
            flex
            justify-around
            w-1/2
            overflow-x-auto
            galaxyfold:hidden
            iphones:hidden
            iphonex:hidden
            ipad:hidden
            ipadpro:hidden
            ipad:flex ipadpro:flex desktop:flex
       "
        >
          {routes.map((route) => {
            return (
              <RouteCard
                title={route.title}
                route={route.route}
                key={route.route}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default RouteCards;
