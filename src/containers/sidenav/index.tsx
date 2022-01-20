import { routes } from "../../routes.config";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const SideNav = () => {
  return (
    <div className="hidden mr-10 mt-10 desktop:block h-1/2 fixed top-0 right-0 ">
      <Link href="/" passHref>
        <a>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 1,
              transition: { duration: 0.2 },
            }}
            className=" cursor-pointer justify-center  flex flex-col bg-primary mb-5 rounded-full h-10 w-10"
          >
            <Image src={"/assets/sidenav/home.svg"} height={24} width={24} />
          </motion.div>
        </a>
      </Link>
      {routes.map((route) => (
        <Link passHref href={route.route}>
          <a>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 1,
                transition: { duration: 0.2 },
              }}
              className=" cursor-pointer justify-center  flex flex-col bg-primary mb-5 rounded-full h-10 w-10"
            >
              <Image src={route.iconURI} height={24} width={24} />
            </motion.div>
          </a>
        </Link>
      ))}

      <div></div>
    </div>
  );
};
export default SideNav;
