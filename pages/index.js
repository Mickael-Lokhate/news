import Article from "../components/Article";
import Layout from "../components/Layout";
import React from "react";

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
      const res = await fetch(`http://localhost:3000/api/headlines/${country}`);
      const data = await res.json();
      if (data && data.articles) setArticles(data.articles);
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
      <div className="last-articles">
        {articles.map((a, i) =>
          a.urlToImage ? <Article article={a} key={i} /> : false
        )}
      </div>

      <style jsx>{`
        .last-articles {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1em;
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
      all_articles: data.articles ?? [],
    },
  };
}

export default Home;
