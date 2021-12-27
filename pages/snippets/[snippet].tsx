import { useEffect, useState } from "react";
import Layout from "../../src/components/Layout";
import { useRouter } from 'next/router'
import { GetServerSideProps, GetStaticPropsContext } from "next";
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import gfm from "remark-gfm";
import * as api from './../../src/api'

const Snippet = () => {
 const router = useRouter();
 const {snippet,uuid} = router.query
 const [content,setContent] = useState("");
 useEffect(()=>{
api.getSnippets(window,snippet as string,uuid as string).then(
  (e)=>{
    setContent(e.story.content.content)
  }
)
},[])
  return <>
  <Layout title="snippets/" slug={snippet as string}>
    <div className="ml-5 mr-5">

   <ReactMarkdown rehypePlugins={[rehypeHighlight]}  remarkPlugins={[gfm]}>{content}</ReactMarkdown>
    </div>
  </Layout>
  </>;
};
export default Snippet;

export async function getServerSideProps(context:GetStaticPropsContext) {
  return {
      props: {},
  };
}
