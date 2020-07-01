import Message from "./Message";
import SendMessage from "./SendMessage";

export default function ChatWindow({
  onTyping,
  messages,
  messageData,
  socketId,
}) {
  return (
    <div className="container">
      <div className="background" />
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
        .container {
          background: transparent;
          width: 100%;
          height: 100%;
        }
        .message-body {
          display: flex;
          width: 100%;
          position: relative;
          height: 100%;
          flex-direction: column;
          font-family: inherit;
        }
        .message-list {
          display: flex;
          heigth: 90%;
          overflow: scroll;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin: 0;
          padding: 0;
        }
        @media (max-width: 540px) {
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
