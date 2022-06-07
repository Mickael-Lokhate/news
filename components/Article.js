import { Colors } from "./colors";

export default function Article({ article }) {
  return (
    <div className="article">
      <img
        alt="article illustration"
        src={article.image_url}
        className="article-img"
      />
      <div className="article-infos">
        <a href={article.link} target="_blank" className="article-link">
          <h3 className="article-title" title={article.title}>
            {article.title}
          </h3>
        </a>
        <div className="article-description">
          <p className="article-description-text">{article.description}</p>
        </div>
        <div>
          <a href={article.link} target="_blank" className="article-link">
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
          object-fit: cover;
        }

        .article-title {
          font-size: 16px;
          color: ${Colors.ORANGE};
        }

        .article-description {
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 60%;
        }

        .article-description-text {
          height: 100%;
          font-size: 14px;
        }

        .article-link {
          color: ${Colors.ORANGE};
          text-decoration: none;
          font-size: 14px;
        }

        .article-link:hover {
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
