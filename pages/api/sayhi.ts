import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "GET") return res.status(400).end();
    try {
        if (req.query.name as string) {
            return res.send(`
            Hi ${req.query.name}!
            **Active IP**: ${req.socket.remoteAddress}\n 
            If you want to browse the code, move over to: https://github.com/imabp/abirpal.dev \n
            Also, I am pretty sure, you would like to sign the guestbook, do it at this endpoint: https://${req.headers.host}/guestbook
            \n
            Active on twitter: @imabptweets https://twitter.com/imabptweets
             `)
        }

        return res.send(`
        Hi! Welcome to my portfolio.\n
        **Active IP: ${req.socket.remoteAddress}**\n 
        If you want me to have a greeting for you? try sending the same request to https://${req.headers.host}/api/sayhi?name="Yourname"
        \n
        \n
        If you want to browse the code, move over to: https://github.com/imabp/abirpal.dev \n
        Also, I am pretty sure, you would like to sign the guestbook, do it at this endpoint: https://${req.headers.host}/guestbook
        \n
        Active on twitter: @imabptweets https://twitter.com/imabptweets
        
        `)

    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
            return res.status(500).json({ error: err.message });
        }
    }
}
