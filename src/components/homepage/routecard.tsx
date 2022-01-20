import Link from "next/link";
import { motion } from "framer-motion";
export type RouteCardProps = {
  title: string;
  route: string;
};
const DefaultRouteCardProps: RouteCardProps = {
  title: "Hello World",
  route: "/",
};
const RouteCard = (props: RouteCardProps) => {
  return (
    <Link href={props.route}>
      <motion.div
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.2 },
        }}
        className="cursor-pointer"
      >
        <a>
          <div
            className="
                bg-primary text-secondary
                h-32 w-32
                flex flex-col
                justify-center
                rounded-sm
                "
          >
            {props.title}
          </div>
        </a>{" "}
      </motion.div>
    </Link>
  );
};
export default RouteCard;
