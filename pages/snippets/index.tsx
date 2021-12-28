import Layout from "../../src/components/Layout";
import SnippetDisplayCard from "../../src/containers/snippets/cards";
import Storyblok from "../../src/lib/storyblok";
import { StoryData } from "storyblok-js-client";
import { useRouter } from "next/router";

export type SnippetProps = {
  //[uuid : storydata]
  snippets: [string, StoryData][];
};

const SnippetHome = ({ snippets }: SnippetProps) => {
  return (
    <Layout title="snippets/" bgPattern={true}>
      <div className="grid grid-col-4">
        {snippets.map((snippet) => (
          <>
            <SnippetDisplayCard
              title={snippet[1].name}
              fullslug={snippet[1].slug}
              type="potrait"
              uuid={snippet[0]}
            />
          </>
        ))}
      </div>
    </Layout>
  );
};
export default SnippetHome;

export async function getStaticProps() {
  let slug = "snippets";

  let sbParams = {
    version: process.env.STORYBLOK_VERSION,
    starts_with: `${slug}/`,
  };
  let { data } = await Storyblok.get(`cdn/links/`, sbParams);
  const stories = Object.entries(data.links);
  return {
    props: {
      snippets: data ? stories : null,
    },
    revalidate: 10, // revalidate every 10 seconds
  };
}
