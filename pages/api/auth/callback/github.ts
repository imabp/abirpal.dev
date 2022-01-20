import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import {
  GitHubOAuth,
  GithubOAuthErrors,
  GitHubUser,
} from "../../../../src/lib/auth";
import { JWTSign } from "../../../../src/lib/helpers";
const EMPTY_GITHUB_USER: GitHubUser = {
  username: "",
  avatar: "",
  email: "",
  name: "",
};
export type AuthSuccessPayload = {
  data: GitHubUser;
  status: true;
};
export type AuthFailurePayload = {
  data: GitHubUser;
  status: false;
};
const githubCallback = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.end(405);
  try {
    const { code } = req.body;
    console.log("CODE", code);
    if (!code) return res.status(400).end();

    const user = await GitHubOAuth(code);
    if (!user.email) return res.status(400).end();

    const payload: AuthSuccessPayload = {
      data: user,
      status: true,
    };
    const jwtstring = JWTSign(payload);

    res.setHeader(
      "Set-Cookie",
      serialize("auth", jwtstring, { path: "/", httpOnly: true })
    );
    console.log(user);
    return res.status(200).json({ auth: "success" });
  } catch (e: any) {
    console.log("ERROR", e.message);
    if (e.message === GithubOAuthErrors.INVALID_CODE)
      return res.status(403).json({ error: e.message });
    if (e.message === GithubOAuthErrors.ACCESS_TOKEN_EXPIRED)
      return res.status(403).json({ error: e.message });

    return res.status(500).json({ error: "Please Try Again!" });
  }
};
export default githubCallback;
