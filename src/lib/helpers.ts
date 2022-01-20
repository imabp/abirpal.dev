import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { NextApiResponse } from "next";
import { CookieSerializeOptions } from "next/dist/server/web/types";

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
export const GetFormatDateString = () => {
  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const today = new Date();
  return today.toLocaleDateString("en-US", options);
};
