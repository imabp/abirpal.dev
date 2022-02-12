import Image from "next/image";
import Link from "next/link";
import GuestbookSVG from "../../../../../public/v2/vectors/guestbook.svg"
import TestimonialsSVG from "../../../../../public/v2/vectors/testimonials.svg"
import TalksSVG from "../../../../../public/v2/vectors/talks.svg"
import SnippetsSVG from "../../../../../public/v2/vectors/snippets.svg"
import { motion } from "framer-motion";
import routesConfig, { routes } from "../../../../routes.config";
type FEATURE = {
    _name: string,
    _image: any,
    _text: string,
    _link: string,
}
const FEATURES: FEATURE[] = [
    {
        _name: "guestbook",
        _image: GuestbookSVG,
        _text: "Sign the Guestbook",
        _link: routesConfig.guestbook.route
    },
    {
        _name: "testimonials",
        _image: TestimonialsSVG,
        _text: "View Recommendations",
        _link: routesConfig.about.route

    },
    {
        _name: "blogs",
        _image: SnippetsSVG,
        _text: "View Blogs and Snippets",
        _link: routesConfig.blog.route
    },
    {
        _name: "developer community",
        _image: TalksSVG,
        _text: "Join the #DAL ",
        _link: routesConfig.community.route

    },
]

const Features = () => {
    return <>
        <div className="text-fs18 w-3/5 mt-20 mb-4 flex justify-between">
            <div><b>Things you should try out. </b></div>

        </div>
        <div className="mb-5 w-full ipadpro:w-3/5 text-fs14 ipad:text-fs21 mt-6 text-whitecustom">
            <div className="grid grid-cols-1 gap-8">
                {FEATURES.map((feat: FEATURE) => {
                    return <motion.div
                        whileHover={{
                            scale: 1.04,
                            transition: { duration: 0.2 },
                        }} 
                        className="cursor-pointer grid grid-cols-1 w-full">

                        <Link href={feat._link} passHref>
                            <a>
                                <motion.div
                                    className={`
                                    rounded-sm cursor-pointer p-1 `}
                                >
                                    <span className="align-middle m-4">
                                    <Image src={feat._image} layout="fixed" height={40} width={40} />
                                    </span>
                                    <div className="inline align-middle ml-4 hover:text-primary">
                                    {feat._text}
                                    </div>
                                </motion.div></a>
                        </Link>

                    </motion.div>
                })
                }




            </div>

        </div></>
}
export default Features;