import Image from "next/image";
import { StoryData } from "storyblok-js-client";
import SnippetDisplayCard from "../../../../containers/snippets/cards";
import { getLinks } from "../../../../lib/storyblok";
export type RecentPostsType = {
    snippets: [string, StoryData][];
};
const RecentPosts = (props: any) => {
    return <>
        <div className="text-fs18 w-3/5 mt-20 mb-4 flex justify-between">
            <div><b>Recent Posts</b></div>

        </div>
        <div className="w-full desktop:w-3/5 ipadpro:w-4/5 text-fs18 mt-6 text-whitecustom">
            <div className="grid gap-4 grid-cols-1 ipad:grid-cols-3 ipadpro:grid-cols-3 ">
                {
                    props.snippets.map((snippet: [string, StoryData]) =>
                        <SnippetDisplayCard
                            key={snippet[0]}
                            title={snippet[1].name}
                            fullslug={snippet[1].slug}
                            type="v2"
                            uuid={snippet[0]}
                        />)
                }


            </div>
            <div className="text-whitecustom text-fs14  mt-8">
               <span className="hover:text-primary cursor-pointer ">View More</span> 
            </div>

        </div></>
}
export default RecentPosts;

