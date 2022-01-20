import axios from "axios";
import { NextApiRequest } from "next";
import { AuthSuccessPayload } from "../../../pages/api/auth/callback/github";
import { getUrlVars, JWTDecode } from "../helpers";
import { githubProvider } from "../providers/github";
export type GitHubUser = {
  username: string;
  avatar: string;
  email: string;
  name: string;
};
export const GithubOAuthErrors = {
  INVALID_CODE: "Code is invalid",
  ACCESS_TOKEN_EXPIRED: "Access Token Expired",
};
export const GitHubOAuth = async (code: string) => {
  try {
    const oauth_response = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code,
      }
    );
    if (oauth_response.data.toString().includes("error"))
      throw new Error(GithubOAuthErrors.INVALID_CODE);
    const { access_token } = getUrlVars(
      decodeURIComponent(oauth_response.data)
    );

    const ghresponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `token ${access_token}`,
      },
    });
    const ghresponsePRIVATEemail = await axios.get("https://api.github.com/user/emails", {
      headers: {
        Authorization: `token ${access_token}`,
      },
    });
    const email = ghresponsePRIVATEemail.data[0].email;
    if (ghresponse.data.toString().includes("error") || ghresponsePRIVATEemail.data.toString().includes("error"))
      throw new Error(GithubOAuthErrors.ACCESS_TOKEN_EXPIRED);
    if(!ghresponse.data.email)
      ghresponse.data.email = email;
    const user = githubProvider(ghresponse.data);

    return user;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const AuthenticateFromRequest = (req: NextApiRequest): boolean => {
  const cookies = req.cookies;
  const { auth } = cookies;
  if (!auth) return false;
  try {
    const payload = JWTDecode(cookies.auth);
    if (payload.status) return true;
  } catch (error: any) {
    console.error(error.message);
    return false;
  }
  return false;
};
