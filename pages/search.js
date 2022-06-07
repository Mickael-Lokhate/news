import React from "react";
import { trackPromise } from "react-promise-tracker";
import Article from "../components/Article";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { Colors } from "../components/colors";

export default function Search() {
  const [search, setSearch] = React.useState("");
  const [news, setNews] = React.useState(null);

  const fetchNews = async (searchVal) => {
    const res = await trackPromise(
      fetch(`http://localhost:3000/api/search/${searchVal}`)
    );
    const data = await res.json();
    if (data && data.results) setNews(data.results);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setSearch(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search && search.length) fetchNews(search);
    else setNews(null);
  };
  return (
    <Layout>
      <h2> - Search for some news - </h2>

      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type={"search"}
            onChange={handleChange}
            onSubmit={handleSubmit}
            value={search}
            placeholder="France, Economy, Bitcoin, ..."
            className="search-input"
            autoCorrect="on"
            autoFocus
            autoSave="on"
            autoComplete="on"
          />
        </form>
        <Loading text={"Searching articles..."} />
        {news ? (
          <div className="news-search">
            <h4>
              Search result for : <q>{search}</q>
            </h4>
            {news.map((n, i) =>
              n.description || n.image_url ? (
                <Article article={n} key={i} />
              ) : (
                false
              )
            )}
          </div>
        ) : (
          false
        )}
      </div>

      <style jsx>{`
        .search {
          margin: 1em 0 2em 0;
        }

        .news-search {
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1em;
          margin-top: 8px;
        }

        .search-input {
          width: 100%;
          padding: 20px;
          border-radius: 5px;
          border: none;
          background-color: ${Colors.LIGHT_BLUE + "88"};
          color: ${Colors.ORANGE};
        }

        .search-input:active,
        .search-input:focus {
          outline: none;
        }

        h4 {
          width: 100%;
          padding-top: 10px;
        }
      `}</style>
    </Layout>
  );
}
