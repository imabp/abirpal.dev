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
      <div
        className="grid gap-4 galaxyfold:grid-cols-1 
      iphones:grid-cols-1
      iphonex:grid-cols-1
      ipad:grid-cols-3
      ipadpro:grid-cols-3
      desktop:grid-cols-6"
      >
        {snippets.map((snippet) => (
          <SnippetDisplayCard
            key={snippet[0]}
            title={snippet[1].name}
            fullslug={snippet[1].slug}
            type="potrait"
            uuid={snippet[0]}
          />
        ))}
      </div>
    </Layout>
  );
};
export default SnippetHome;

export async function getServerSideProps() {
  const stories = await getLinks("snippets");

  return {
    props: {
      snippets: stories,
    },
  };
}
