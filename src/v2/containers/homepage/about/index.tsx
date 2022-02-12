import Image from "next/image";
import Avatar from "../../../../../public/v2/assets/avatar.svg";
import twemoji from 'twemoji'
const About = () => {
   return <>
        <div className="text-fs44 mb-4">
         <Image src={Avatar} className="inline"/>  👋  Welcome to <b>AbirPal.dev</b>
        </div>
        <div className="w-full ipadpro:w-3/5 text-fs21 mt-6 text-whitecustom">
            I am Abir Pal, former Software Engineer Intern at Affinidi, Singapore.
            <br /><br />
            I have shipped things with best practices revolving around full stack applications, blockchain contracts,
            devops pipelines, scripting and AppSec.
            
            I am a <b>Major League Hacking Fellow</b> and I contribute to <b>Open Source EDA Specification</b> at AsyncAPI.
            <br/>
            <br/>
            I am passionate about building <b>Developer  Relations and Experience</b> and have been hosting/ invited at various conferences and developer communities. 
        </div></>
}
export default About;