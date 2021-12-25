import Layout from "../../src/components/Layout";
import SnippetDisplayCard from "../../src/containers/snippets/cards";

const SnippetHome = () => {
  return <Layout title="snippets/">
<SnippetDisplayCard title="Helo World" slug="ff" type="landscape"/>
  </Layout>;
};
export default SnippetHome;

async function getStaticProps(){
let slug = 'snippets'

}