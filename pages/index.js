import Article from "../components/Article";
import Layout from "../components/Layout";
import React from "react";
import Loading from "../components/Loading";
import { trackPromise } from "react-promise-tracker";

function Home({ all_articles }) {
  const [articles, setArticles] = React.useState(all_articles);
  const [country, setCountry] = React.useState(null);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/locate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await res.json();
      if (data && data.country) setCountry(data.country);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    const getHeadlines = async () => {
      const res = await trackPromise(
        fetch(`http://localhost:3000/api/headlines/${country}`)
      );
      const data = await res.json();
      if (data && data.results) setArticles(data.results);
    };
    getData();
    if (country) {
      getHeadlines();
    }
  }, [country]);

  return (
    <Layout>
      <h2> - Last Articles for your country ({country ?? "US"}) - </h2>
      <hr />
      <Loading text={"Loading..."} />
      <div className="last-articles">
        {articles.map((a, i) => (
          <Article article={a} key={i} />
        ))}
      </div>

      <style jsx>{`
        .last-articles {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1em;
          margin-bottom: 2em;
        }
      `}</style>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/headlines");
  const data = await res.json();
  return {
    props: {
      all_articles: data.results ?? [],
    },
  };
}

export default Home;
