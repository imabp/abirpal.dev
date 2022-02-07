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
    _link:string,
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
        _text: "Testimonials",
        _link: routesConfig.about.route

    },
    {
        _name: "developer community",
        _image: TalksSVG,
        _text: "Developer Community",
        _link: routesConfig.community.route
    
    },
    {
        _name: "blogs",
        _image: SnippetsSVG,
        _text: "Blogs and Snippets",
        _link: routesConfig.blog.route
    }
]

const Features = () => {
    return <>
        <div className="text-fs18 w-3/5 mt-20 mb-4 flex justify-between">
            <div><b>Things you should try out. </b></div>

        </div>
        <div className="mb-5 w-4/5 ipadpro:w-3/5 text-fs18 mt-6 text-whitecustom">
            <div className="grid iphones:grid-cols-1 ipadpro:grid-cols-3 gap-8">
                {FEATURES.map((feat: FEATURE) => {
                    return <motion.div 
                    whileHover={{
                      scale: 1.04,
                      transition: { duration: 0.2 },
                    }} className="w-full  cursor-pointer 
                   flex flex-row justify-around">
                       <Link href={feat._link} passHref>
                        <div 
                        className={` bg-blackcustom rounded-sm cursor-pointer border-2 p-4 border-white hover:border-primary`}
                        >
                            <Image src={feat._image} layout="fixed" height={40} width={40}/>
                        </div>
                       </Link>
                        <div className="text-center flex flex-col justify-center">
                            {feat._text}
                        </div>
                    </motion.div>
                })
                }




            </div>

        </div></>
}
export default Features;