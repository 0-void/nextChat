import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          Welcome to <span> NextChat</span>
        </h1>
        <Link href="chat/joinchat">
          <a className="link">Join chat</a>
        </Link>
      </main>
      <style jsx>{`
        .title {
          font-size: 3rem;
        }
        .title span {
          color: #0070f3;
        }
        .link {
          border-radius: 3px;
          border: none;
          font-size: 1.3rem;
          height: 3.8rem;
          width: 9rem;
          background: #e91e63;
          text-decoration: none;
          color: white;
          padding: 1.2rem;
          text-align: center;
          letter-spacing: 2px;
        }
        .container {
          min-height: 100vh;
          flex-direction: column;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        main {
          flex: 1;
          flex-direction: column;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <style jsx global>
        {`
          html,
          body {
            margin: 0;
            padding: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}
