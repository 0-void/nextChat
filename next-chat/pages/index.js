import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [value, setValue] = useState("");
  const onInputChangeHandler = (event) => {
    setValue(event.target.value);
  };
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
        <div className="join-container">
          <input
            placeholder="username"
            value={value}
            onChange={onInputChangeHandler}
          />
          <Link
            href="/chat/publicchat/[username]"
            as={`/chat/publicchat/${value ? value : Math.random()}`}
          >
            <a className="link">Join chat</a>
          </Link>
        </div>
      </main>
      <style jsx>{`
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
        .title {
          font-size: 3rem;
        }
        .title span {
          color: #0070f3;
        }
        .link {
          border-radius: 3px;
          display: inline-block;
          border: none;
          font-size: 1.3rem;
          height: 3.8rem;
          width: 9rem;
          background: #e91e63;
          text-decoration: none;
          vertical-align: middle;
          color: white;
          padding: 1.2rem;
          text-align: center;
          letter-spacing: 2px;
        }
        .join-container {
          display: flex;
          align-items: center;
          justify-content: cente;
        }
        .join-container input {
          font-size: 1.3rem;
          margin: 0 1.7rem;
          height: 3.8rem;
          width: 14rem;
          padding: 1.2rem;
        }
        @media (max-width: 540px) {
          .containter {
            width: 100vh;
          }
          .join-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .join-container input {
            margin: 1.8 0rem;
            height: 3.1rem;
            width: 13rem;
          }
          .link {
            margin-top: 0.8rem;
            height: 3.1rem;
            line-height: 0.5;
            width: 9rem;
          }

          .title {
            font-size: 1.7rem;
          }
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
