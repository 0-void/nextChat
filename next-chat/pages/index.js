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
      <style jsx>
        {`
          .container {
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .container h1 {
            font-size: 2.4rem;
            text-align: center;
            margin: 0 auto;
          }
          .join-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2rem;
          }
          .title span {
            color: #0070f3;
          }
          .join-container input {
            padding: 0.8rem;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .link {
            text-decoration: none;
            color: white;
            background: #e91e63;
            padding: 1rem 1.5rem;
            letter-spacing: 1.8px;
            border-radius: 4px;
            margin: 1rem;
          }
          @media (min-width: 540px) {
            .join-container {
              flex-direction: row;
              justify-content: center;
            }
            .link {
              padding: 0.9rem 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
}
