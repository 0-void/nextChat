import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import StatusBar from "../../../components/StatusBar";
import ChatHeader from "../../../components/Chat/ChatHeader";
import { useSocket } from "../../../lib/useSocket";
import ChatWindow from "../../../components/Chat/ChatWindow";

export default function JoinChat() {
  const Router = useRouter();
  const { username } = Router.query;
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState(false);
  const [socket] = useSocket(process.env.NEXT_PUBLIC_SOCKET_URL);
  const [messages, setMessages] = useState([]);
  const [members, setMembers] = useState([]);
  const [resgistered, setRegistered] = useState(false);
  const [typing, setTyping] = useState({ isTyping: false, username: "" });

  const sendMessageHandler = (message) => {
    if (message !== "")
      socket.emit("send message", {
        message,
        id: message + Math.random(),
        time: new Date().toLocaleTimeString(),
        socketId: socket.id,
      });
  };
  const onTyping = () => {
    socket.emit("typing", username);
  };

  const getSocket = () => {
    if (socket) return socket.id;
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
    let timeInterval;
    if (typing.isTyping) {
      timeInterval = setInterval(() => {
        setTyping({ isTyping: false, username: "" });
      }, 2000);
    }
    return () => clearTimeout(timeInterval);
  }, [typing]);

  useEffect(() => {
    if (!socket) return;
    if (!resgistered) socket.emit("register", username);

    socket.on("conversation", (conversation) => {
      setMessages((prevState) => [...prevState, conversation]);
    });

    socket.on("members", (members) => {
      setMembers(members);
    });

    socket.on("connection status", (response) => {
      const message = response.message
        ? response.message
        : (socket.id === response.socketId ? "You" : response.username) +
          " joined";
      const newMessage = {
        ...response,
        message,
      };
      setMessages((prevMessage) => [...prevMessage, newMessage]);
    });
    socket.on("typing", (typingDetails) => {
      setTyping({
        isTyping: typingDetails.isTyping,
        username: typingDetails.username,
      });
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
      <div className="background" />
      <StatusBar time={date} status={status} />
      <ChatHeader title={username} members={members} typing={typing} />
      <main>
        <ChatWindow
          onTyping={onTyping}
          username={username}
          members={members}
          messages={messages}
          messageData={sendMessageHandler}
          typing={typing}
          socketId={getSocket}
        />
      </main>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100%;
        }
        main {
          width: 100%;
          height: 100%;
        }
        @media (min-width: 540px) {
          .background {
            background: linear-gradient(
              146deg,
              rgba(34, 193, 195, 1) 0%,
              rgba(253, 167, 45, 1) 100%
            );
            position: fixed;
            top: 0;
            left: 0;
            min-width: 100%;
            min-height: 100vh;
            z-index: -1;
          }
        }
      `}</style>
    </div>
  );
}
