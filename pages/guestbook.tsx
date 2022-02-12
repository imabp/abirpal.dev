import Layout from "../src/components/Layout/index";
import Image from "next/image";
import Link from "next/link";
import { home } from "../src/routes.config";
import { GetServerSidePropsContext } from "next";
import { GitHubUser } from "../src/lib/auth";
import { GetFormatDateString, JWTDecode } from "../src/lib/helpers";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthSuccessPayload } from "./api/auth/callback/github";
import { getStory } from "../src/lib/storyblok";
import { StoryData } from "storyblok-js-client";
import CommentBox, { commentTYPE, EMPTYCOMMENT } from "../src/components/guestbook/comments";
import { GetAllComments } from "../src/guestbook.db";

interface GuestBookProps {
  user: GitHubUser;
  auth: boolean;
  comments: commentTYPE[];
}

const EMPTY_GITHUB_USER: GitHubUser = {
  username: "",
  avatar: "",
  email: "",
  name: "",
};

const Guestbook = ({ user, auth, comments }: GuestBookProps) => {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false)
  const [showComments, setShowComments] = useState(false);
  useEffect(()=>{
    if(comments[0].message!==EMPTYCOMMENT.message)
    {
      console.log(comments[0].message, EMPTYCOMMENT.message)
      setShowComments(true);
    }
  },[])
  const call = () => {
    if (auth) return;

    const GITHUB_URL = "https://github.com/login/oauth/authorize";
    const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const SCOPES = "read:user user:email";
    const GITHUB_STATE_PARAM = process.env.NEXT_PUBLIC_GITHUB_STATE;
    const URI = `${GITHUB_URL}?client_id=${GITHUB_CLIENT_ID + "&"}scope${"=" + SCOPES
      }&state${"=" + GITHUB_STATE_PARAM}`;
    window.location.replace(URI);
  };
  const postComment = () => {
    setErrorMessage(false)
    setSubmitting(true);
    const comment = {
      message: message,
      name: user.name,
      username: user.username,
      date: GetFormatDateString(),
    };

    return window
      .fetch("/api/guestbook/post_comment", {
        method: "POST",
        body: JSON.stringify({
          payload: {
            comments: comment,
          },
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        if (res.status.toString().includes('4')) {
          throw new Error("Client Error")
        }
        setMessage("");
        setSubmitting(false);
        window.location.reload();
      })
      .catch((err) => {
        setSubmitting(false);

        setErrorMessage(true)
      });
  };

  return (
    <>
      <Layout >
        <p className="mt-14 ml-4 font-bold text-fs24 ipadpro:text-center ">
          GuestBook
        </p>
        <p className="font-bold text-fs16 ipadpro:text-center mb-6">
          Welcome to Guestbook!
        </p>

        <div className="mx-auto ipadpro:mt-10 ipadpro:flex ipadpro:justify-center w-full">
          <div className="flex flex-col  ipadpro:w-1/3">
            <div className="sticky top-0 bg-base border-2  border-white rounded-md p-4 pb-5 grid grid-cols-1 ipadpro:grid-cols-2 gap-4">
              <div className="ipadpro:pl-5 w-full">
                Leave a comment below. It could be anything – appreciation,
                information, wisdom, or even humor. Surprise me!
                <div
                  className={`mt-5 cursor-pointer 
                
                ${user.username ? "bg-greencustom " : "bg-primary text-base"}
                text-secondary
                w-60 p-2 pl-4 rounded-md`}
                  onClick={call}
                >
                  {user.username
                    ? `Signed in: @${user.username}`
                    : `Sign in to Github`}
                </div>
              </div>
              <div className="hidden ipadpro:flex w-full justify-end ">
                <div className="text-right w-48 h-48 bg-white rounded-full  ">
                  {user.avatar === "" ? (
                    <img
                      className="rounded-full"
                      src={
                        "https://avatars.githubusercontent.com/u/53480076?v=4"
                      }
                    />
                  ) : (
                    <>
                      <img className="rounded-full" src={user.avatar} />
                    </>
                  )}
                </div>
              </div>
            </div>
            {auth && (
              <div className="sticky top-0 bg-primary mt-5 mr-4 ipadpro:mr-0 pb-4 rounded-md pl-5">
                <div className=" ml-4 p-2 mr-4 pt-5 pb-4">
                  <b> Sign the Guestbook</b> <br />
                  Share a message for a future visitor of my site.
                </div>

                <input
                  type="text"
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-4/5 ml-6 mb-4 rounded-md border-4 p-2
                  ${errorMessage ? "bg-redcustom " : "text-base"}`}
                />
                <div
                  className="bg-accent w-28 ml-6 p-2 text-white rounded-md cursor-pointer hover:bg-accenthover text-center"
                  onClick={postComment}
                >
                  {submitting ? "Signing..." : "Sign"}
                </div>
              </div>
            )}
            <div className=" mt-14 ml-4  ">
              {showComments &&  comments.map((comment, i) => (
                <CommentBox
                  key={i}
                  name={comment.name}
                  message={comment.message}
                  date={comment.date}
                  username={comment.username}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Guestbook;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const body: any = await GetAllComments()
  let comments: commentTYPE[] = [
   EMPTYCOMMENT
  ];
  if (body && body.comments) {
    comments =
      body &&
      body.comments.map((comment: commentTYPE) => {
        return {
          name: comment.name,
          username: comment.username,
          message: comment.message,
          date: comment.date,
        };
      });
    console.log(body.comments);
  }
  // Handling Authentication
  try {
    const { auth } = context.req.cookies;
    if (!auth) throw new Error("Not Authenticated");

    const payload = JWTDecode(auth);

    const prepareResponse: GuestBookProps = {
      user: {
        name: payload.data.name,
        email: payload.data.email,
        avatar: payload.data.avatar,
        username: payload.data.username,
      },
      auth: payload.status,
      comments: comments,
    };
    return {
      props: {
        ...prepareResponse,
      },
    };
  } catch (error: any) {
    return {
      props: {
        user: EMPTY_GITHUB_USER,
        auth: false,
        comments: comments,
      },
    };
  }
};
