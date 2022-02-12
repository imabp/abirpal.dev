import { NextApiRequest, NextApiResponse } from "next";
import { GetFormatDateString } from "../../src/lib/helpers";
import { getStory } from "../../src/lib/storyblok";

const getMDX = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") return res.end(405);
    try {
        const {uuid} = JSON.parse(req.body)
        console.log("SERVER", typeof uuid)
        const response = await getStory(uuid, undefined, undefined);

        if (!response)
            return res.status(404).end();
        const payload = {
            slug:response.story.slug,
            mdx:response.story.content.content,
            title:response.story.content.title,
            uuid:uuid,
        }
        return res.status(200).send(payload);

    } catch (error) {
        console.log(error)
        res.status(500).end();
    }
}
export default getMDX;