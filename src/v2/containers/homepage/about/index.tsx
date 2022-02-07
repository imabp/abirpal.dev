import Image from "next/image";
import Avatar from "../../../../../public/v2/assets/avatar.svg";

const About = () => {
   return <>
        <div className="text-fs44 mb-4">
         <Image src={Avatar} className="inline"/>   Welcome to <b>AbirPal.dev</b>
        </div>
        <div className="w-full ipadpro:w-3/5 text-fs18 mt-6 text-whitecustom">
            I am Abir Pal, ex-software engineer intern at Affinidi, Singapore.
            <br /><br />
            With years into <b> software engineering and presence in developer communities</b>,
            I have shipped things revolving around full stack applications, toolchains,
            devops, automations and building developer -relations,resources and experience(DX).
            <br /><br />
            I regularly contribute to various open source organizations and communities and help people to learn software engineering.
            And shares an interest in building <b>Developer Experience</b> and <b>Developer Relations.</b>
        </div></>
}
export default About;