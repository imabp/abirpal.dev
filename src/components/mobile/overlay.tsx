import { routes } from "../../routes.config";
import Link from "next/link";
const MenuOverlay = () => {
  return (
    <>
      <div className=" z-29 w-full h-screen overflow-hidden bg-accent text-right text-secondary p-8">
        {routes.map((route) => (
          <div
            className="mb-4 iphones:text-fs18  iphonex:text-fs24 
           ipadpro:text-fs35 ipad:text-fs35 
           desktop:text-fs35"
          >
            <Link passHref href={route.route}>
              {route.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default MenuOverlay;
