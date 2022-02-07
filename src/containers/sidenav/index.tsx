import routesConfig, { routes } from "../../routes.config";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
export type SideNavProps = {
  type: string
}
const SideNav = ({ type }: SideNavProps) => {
  if (!type)
    type = "left"
  const router = useRouter()
  const checkActivePath = (pathToCompare: string) => router.pathname === pathToCompare ? "bg-primary rounded-sm" : "bg-blackcustom rounded-sm"
  return (
    <div className={`hidden  mt-10 desktop:block h-1/2 fixed ${type === "left" ? "top-0 left-0 ml-10" : "top-0 right-0 mr-10"} `}>
      <Link href="/" passHref>
        <a title={"Home"}>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 1,
              transition: { duration: 0.2 },
            }}
            className=
            {`cursor-pointer justify-center  
            flex flex-col mb-5 h-10 w-10 border-2 border-transparent hover:border-primary ${checkActivePath(routesConfig.home.route)} `}
          >
            <Image src={routesConfig.home.iconURI} height={25} width={25} />
          </motion.div>
        </a>
      </Link>
      {routes.map((route) => (
        <Link passHref href={route.route}>
          <a title={route.title}>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 1,
                transition: { duration: 0.2 },
              }}
              className={`${checkActivePath(route.route)} cursor-pointer justify-center  flex flex-col  mb-5
               h-10 w-10 border-2 border-transparent hover:border-primary`}
            >
              <Image src={route.iconURI} height={20} width={20} />
            </motion.div>
          </a>
        </Link>
      ))}
    </div>
  );
};
export default SideNav;
