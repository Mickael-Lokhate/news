import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Home;
