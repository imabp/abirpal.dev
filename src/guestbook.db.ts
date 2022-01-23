import { commentTYPE } from "./components/guestbook/comments";
import { CloudStorage } from "./lib/deta";

const Global_DB_key = "global_db"
let db = new CloudStorage()
db.init();
db.connectToDB("guestbook");

export const AddCommentToDB = async (comment: commentTYPE) => {
    try {
        const key = comment.username;
        if (!key)
            throw new Error("No Username")
        let existingComments: Array<commentTYPE | null> = [];
        const ifUserExist = await db.GetFromDB(key);
        if (ifUserExist) {
            existingComments = ifUserExist.comments as Array<commentTYPE>
            existingComments.unshift(comment);
        }
        await AddToGlobalDB(comment)
        const serializedPayloadWithKey = { comments: ifUserExist ? existingComments : [comment], key: key }
        const response = await db.AddtoDB(serializedPayloadWithKey)
        console.log('responseReceived->')
        if (!response)
            throw new Error("Not Found")
        return response;
    } catch (error: any) {
        return error.message
    }
}
export const GetAllComments = async () => {
    const comments = await db.GetFromDB(Global_DB_key)
    console.log("FetchedFromGlobalDB->",);
    return comments;
}

export const AddToGlobalDB = async (comment: commentTYPE) => {
    try {
        const existingDataInGlobalDB = await db.GetFromDB(Global_DB_key)
        if (!existingDataInGlobalDB)
            await db.AddtoDB({ comments: [comment], key: Global_DB_key })
        if (existingDataInGlobalDB) {
            console.log("existingDataInGlobalDB",existingDataInGlobalDB)
            const commentsArray = existingDataInGlobalDB.comments as Array<any>
            commentsArray.unshift(comment)
            await db.AddtoDB({ comments: commentsArray , key:Global_DB_key })
        }
        console.log('AddedToGlobalDB->')
        return true;

    } catch (error: any) {
        return false;
    }
}