import Layout from "../../src/components/Layout";
import { GetServerSidePropsContext } from "next";
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
      <Layout title="snippets/" slug={title as string}>
        <div
          className="prose 
         block mr-auto ml-auto iphones:mr-5 ipad:mr-auto ipadpro:mr-auto desktop:mr-auto
         "
        >
          <MarkdownViewer
            mdx={mdx}
            className="
         block mr-auto ml-auto iphones:mr-5 ipad:mr-auto ipadpro:mr-auto desktop:mr-auto 
         "
          />
        </div>
        <p className="text-2xl mb-4">More Articles</p>
        <div className="relative flex ml-3 overflow-x-scroll">
          {snippets.map((snippet) => (
            <>
              <SnippetDisplayCard
                title={snippet[1].name}
                fullslug={snippet[1].slug}
                type="landscape"
                uuid={snippet[0]}
              />
            </>
          ))}
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
