import ChatHeader from "./ChatHeader";
import Message from "./Message";
import SendMessage from "./SendMessage";

export default function ChatWindow({
  username,
  members,
  onTyping,
  messages,
  messageData,
  typing,
  socketId,
}) {
  return (
    <div className="container">
      <ChatHeader title={username} members={members} typing={typing} />
      <div className="message-body">
        <ul className="message-list">
          {messages.map((message) => {
            return (
              <Message
                key={message.id}
                content={message.message}
                time={message.time}
                type={
                  message.type
                    ? message.type
                    : message.socketId === socketId()
                    ? "self"
                    : "align-self_left"
                }
              />
            );
          })}
        </ul>
        <SendMessage
          onTyping={onTyping}
          onClick={messageData}
          className="send-message"
        />
      </div>
      <style jsx>{`
        .message-body {
          height: 100%;
          width: 100%;
          font-family: inherit;
        }
        .message-list {
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}
/*

      <style jsx>
        {`
          .container {
            width: 35rem;
            height: 90vh;
            background: white;
            -webkit-box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.41);
            -moz-box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.41);
            box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.41);
            position: relative;
            border-radius: 6px;
            overflow: hidden;
          }
          .message-body {
            height: 100%;
            width: 100%;
            display: flex;
            flex: 1;
          }
          .message-list {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 0;
            padding: 0;
            overflow: scroll;
            height: 100%;
          }
          .message-list::-webkit-scrollbar {
            display: none;
          }
          .message-list li {
            justify-self: flex-end;
          }
          @media (max-width: 540px) {
            .container {
              max-width: 100vh;
              height: 90vh;
            }
            .message-body {
              flex: 0;
            }
          }
        `}
      </style>
    */
