// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Storyblok from "../../src/lib/storyblok";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(400).end()
  try {
    const { uuid, full_slug } = req.body

    if (uuid) {

      const sbParams = {
        version: process.env.STORYBLOK_VERSION,
        find_by: 'uuid'
      };

      const response = await Storyblok.get(`cdn/stories/${uuid}`, sbParams)
      return res.status(200).json({ snippet: response.data })
    }
    else if (full_slug) {
      const sbParams = {
        version: process.env.STORYBLOK_VERSION,
        starts_with: `${full_slug}/`,
      };
      const response = await Storyblok.get(`cdn/stories/${full_slug}`, sbParams)
      return res.status(200).json({ snippet: response.data })
    }
    else throw new Error("NO SLUG");
    
  } catch (e) {
    return res.status(500).json({ error: e });
  }
}
