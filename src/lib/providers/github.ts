import { GitHubUser } from "../auth";

export const githubProvider = (data: Record<string, any>): GitHubUser => {
  return {
    username: data.login as string,
    avatar: data.avatar_url as string,
    email: data.email as string,
    name: data.name as string,
  };
};
