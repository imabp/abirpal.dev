import Layout from "../../src/components/Layout";
import Storyblok from "../../src/lib/storyblok";

const TalksHome = ({story}:any) => {
  return <Layout title="talks/">Index</Layout>;
};
export default TalksHome;

export async function getStaticProps(){
    let slug = 'talks'
    let sbParams = {
        version:'published'
    }
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);
  return {
    props: {
      story: data ? data.story : null,
    },
    revalidate: 10, // revalidate every 2 seconds
  };
    }