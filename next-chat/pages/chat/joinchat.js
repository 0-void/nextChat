import { useEffect, useState } from "react";
import Head from "next/head";

import StatusBar from "../../components/StatusBar";
import { useSocket } from "../../lib/useSocket";
import ChatWindow from "../../components/Chat/ChatWindow";

export default function JoinChat() {
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState(false);
  const [socket] = useSocket("http://localhost:5000");
  const [messages, setMessages] = useState([]);

  const sendMessageHandler = (message) => {
    socket.emit("send message", { message, id: message + Math.random() });
  };

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        setStatus(true);
      });
      socket.on("disconnect", () => {
        setStatus(false);
      });
      socket.on("date", (data) => {
        setDate(data);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket)
      socket.on("conversation", (conversation) => {
        console.log(conversation);
        setMessages((prevState) => [...prevState, conversation]);
      });
  }, [socket]);

  const connectionHandler = () => {
    if (status) {
      socket.disconnect();
    } else {
      socket.connect();
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Chat Room</title>
        <link rel="icon" href="../../favicon.ico" />
      </Head>
      <main>
        <StatusBar time={date} status={status} />
        <button onClick={connectionHandler}>
          {status ? "disconnect" : "connect"}
        </button>
        <button onClick={() => setMessages([])}>clear message</button>
        <ChatWindow messages={messages} messageData={sendMessageHandler} />
      </main>
      <style jsx>
        {`
          .container {
            height: 100vh;
            width: 100vh;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
}
