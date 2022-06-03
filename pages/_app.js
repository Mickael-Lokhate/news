import Header from "../components/Header";
import Layout from "../components/Layout";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps}></Component>
    </Layout>
  );
}
