import Link from "next/link";
import { Colors } from "./colors";

export default function Header() {
  return (
    <div className="header">
      <div className="bg"></div>
      <h1 className="title">News</h1>
      <nav className="nav-menu">
        <ul className="menu">
          <li>
            <Link href="/">
              <a className="link">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <a className="link">Search</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          padding: 1em;
          position: relative;
          margin-bottom: 1em;
        }
        .bg {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          filter: blur(10px);
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
        }

        .title {
          margin: 0;
          color: ${Colors.ORANGE};
        }

        .nav-menu {
          margin: 0;
        }

        .link {
          text-decoration: none;
          color: ${Colors.GREY};
        }

        .link:hover {
          opacity: 0.9;
        }

        .menu {
          list-style: none;
          display: flex;
          gap: 1em;
          margin: 0;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
