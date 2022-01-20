import { NextApiRequest, NextApiResponse } from "next";
import { AuthenticateFromRequest, GitHubUser } from "../../../src/lib/auth";
import { JWTDecode } from "../../../src/lib/helpers";
import { UpdateExistingStory } from "../../../src/lib/sbManagement";

const PostComment = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const authenticated = AuthenticateFromRequest(req);
    console.log(authenticated);
    if (!authenticated) return res.status(403).end();
    if (!req.body.payload) return res.status(400).end();
    const response = await UpdateExistingStory("guestbook", req.body.payload);
    if (response) return res.status(200).end();
  } catch (error) {
    console.log(error);
  }
};
export default PostComment;
