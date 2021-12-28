// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Storyblok, { getStory } from "../../src/lib/storyblok";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(400).end();
  try {
    const { uuid, full_slug } = req.body;

    if (uuid) {
      const response = await getStory(uuid);
      return res.status(200).json({ ...response.story });
    } else if (full_slug) {
      const response = await getStory(undefined, "snippets", full_slug);
      return res.status(200).json({ ...response.story });
    } else throw new Error("NO SLUG");
  } catch (e) {
    return res.status(500).json({ error: e });
  }
}
