import Layout from "../../src/components/Layout";
import SnippetDisplayCard from "../../src/containers/snippets/cards";
import Storyblok, { getLinks } from "../../src/lib/storyblok";
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
              key={snippet[0]}
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
  const stories = await getLinks("snippets");

  return {
    props: {
      snippets: stories,
    },
    revalidate: 21900, // check every 6 hours for new articles
  };
}
