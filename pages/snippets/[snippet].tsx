import Layout from "../../src/components/Layout";
import { GetServerSidePropsContext } from "next";
import { serialize } from "next-mdx-remote/serialize";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import gfm from "remark-gfm";
import { getStory, getStoryResponse } from "../../src/lib/storyblok";

interface SnippetPage {
  mdx: string;
  title: string;
  date: string;
}

const Snippet = ({ mdx, title, date }: SnippetPage) => {
  return (
    <>
      <Layout title="snippets/" slug={title as string}>
        <div className="prose block mr-auto ml-auto iphones:mr-5 ipad:mr-auto ipadpro:mr-auto desktop:mr-auto">
          <ReactMarkdown remarkPlugins={[gfm]}>{mdx}</ReactMarkdown>
        </div>
      </Layout>
    </>
  );
};
export default Snippet;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { story } = await getStory(
    context.query.uuid as string,
    "snippets",
    context.query.snippet as string
  );
  const mdx = await story?.content.content;
  return {
    props: {
      mdx: mdx,
      title: story?.content.title,
      date: story?.published_at,
      slug: story?.slug,
    },
  };
}
