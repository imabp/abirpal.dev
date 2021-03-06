import Layout from "../../src/components/Layout/index";
import { GetServerSidePropsContext, GetStaticPaths } from "next";
import { serialize } from "next-mdx-remote/serialize";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import gfm from "remark-gfm";
import { getLinks, getStory, getStoryResponse } from "../../src/lib/storyblok";
import SnippetDisplayCard from "../../src/containers/snippets/cards";
import { StoryData } from "storyblok-js-client";
import MarkdownViewer from "../../src/containers/markdownViewer";

interface SnippetPage {
  mdx: string;
  title: string;
  date: string;
  snippets: [string, StoryData][];
}

const Snippet = ({ mdx, title, date, snippets }: SnippetPage) => {
  return (
    <>
      <Layout >
        <div
          className="prose text-white
         block ml-10 
         "
        >
          <p className="text-fs24 font-bold">{title}</p>
          <MarkdownViewer
            mdx={mdx}
            className="text-white
         block mr-auto ml-auto iphones:mr-5 ipad:mr-auto ipadpro:mr-auto desktop:mr-auto 
         "
          />
        </div>
      
      </Layout>
    </>
  );
};
export default Snippet;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  console.log(context.query.uuid);
  const { story } = await getStory(
    context.query.uuid as string,
    "snippets",
    context.query.snippet as string
  );
  const snippets = await getLinks("snippets");
  const mdx = await story?.content.content;
  return {
    props: {
      mdx: mdx,
      title: story?.content.title,
      date: story?.published_at,
      slug: story?.slug,
      snippets: snippets,
    },
  };
}
