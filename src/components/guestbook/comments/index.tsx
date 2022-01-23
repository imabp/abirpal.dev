export type commentTYPE = {
  message: string;
  name: string;
  username: string;
  date: string;
};
export const EMPTYCOMMENT:commentTYPE= {
  message:"",
  name:"lorem",
  username:"ipsum",
  date:""
}
const CommentBox = ({ message, name, username, date }: commentTYPE) => {
  return <div className=" flex flex-col mb-10">
    <div>{message}</div>
    <div className=" flex text-lang-bg-cypress mt-3">
      {name} / {date}
    </div>
  </div>;
};
export default CommentBox;
