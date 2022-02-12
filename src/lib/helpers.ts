import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { NextApiResponse } from "next";
import { CookieSerializeOptions } from "next/dist/server/web/types";
import { commentTYPE } from "../components/guestbook/comments";
export type CookieConfig = {
  name: string;
  value: string;
  options?: CookieSerializeOptions;
};

export const getUrlVars = (url: string) => {
  var hash;
  var myJson: any = {};
  var hashes = url.slice(url.indexOf("?") + 1).split("&");
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    myJson[hash[0]] = hash[1];
    // If you want to get in native datatypes
    // myJson[hash[0]] = JSON.parse(hash[1]);
  }
  return myJson;
};

export const setCookiesFromRequest = (
  res: NextApiResponse,
  name: string,
  value: string,
  days: number
) => {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  // res.setHeader('set-cookie',)
};

export const JWTSign = (payload: Record<string, any>) => {
  try {
    const jwtstring = jwt.sign(payload, process.env.JWT_SECRET as string);
    return jwtstring;
  } catch (error) {
    throw new Error("Unable to Sign Token");
  }
};
export const JWTDecode = (token: string) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);
    return payload;
  } catch (error) {
    throw new Error("Invalid Token");
  }
};
export const GetFormatDateString = (isoString?:string) => {
  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  let today = new Date();
  
  if(isoString)
  today = new Date(isoString)
  
  return today.toLocaleDateString("en-US", options);
};

export const SanitizeGuestBookComment = (payload: any) => {
  try {
    if(
      (payload.name as string).trim().length ===0 ||
      (payload.message as string).trim().length ===0 ||
      (payload.username as string).trim().length ===0 ||
      (payload.date as string).trim().length ===0
    )
    throw new Error("Empty Inputs")
    const s: commentTYPE = {
      name: payload.comment as string,
      message: payload.message as string,
      username: payload.username as string,
      date: payload.date as string
    }
    return { validated: true, comment: s };
  } catch (e: any) {
    console.log(e.message)
    return { validated: false };
  }
}
export const getRandomColor=()=>{
  const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}