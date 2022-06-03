import { Colors } from "./colors";

export default function Article({ article }) {
  return (
    <div className="article">
      <img
        alt="article illustration"
        src={article.urlToImage}
        className="article-img"
      />
      <div className="article-infos">
        <h3 className="article-title" title={article.title}>
          {article.title}
        </h3>
        <p className="article-description">{article.description}</p>
        <div>
          <a href={article.url} target="_blank" className="article-more">
            Read more
          </a>
        </div>
      </div>

      <style jsx>{`
        .article {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 1em;
          object-fit: cover;
          max-height: 300px;
          max-width: 48%;
          border-radius: 5px;
          backdrop-filter: blur(300px);
          background-color: ${Colors.LIGHT_BLUE + "55"};
          overflow: hidden;
        }

        .article-img {
          height: 100%;
          max-width: 40%;
          border-radius: 5px 0 0 5px;
        }

        .article-title {
          font-size: 16px;
          color: ${Colors.ORANGE};
        }

        .article-description {
          font-size: 14px;
        }

        .article-more {
          color: ${Colors.ORANGE};
          text-decoration: none;
          font-size: 14px;
        }

        .article-more:hover {
          opacity: 0.8;
        }

        .article-infos {
          display: flex;
          height: 100%;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}
