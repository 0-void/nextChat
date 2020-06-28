import ChatHeader from "./ChatHeader";
import Message from "./Message";
import SendMessage from "./SendMessage";

export default function ChatWindow({ messages, messageData }) {
  return (
    <div className="container">
      <ChatHeader title="Name" />
      <div className="message-body">
        <ul className="message-list">
          {messages.map((message) => {
            return (
              <Message
                key={message.id}
                content={message.message}
                //                time={message.time}
                time={new Date().toLocaleTimeString()}
              />
            );
          })}
        </ul>
        <SendMessage onClick={messageData} className="send-message" />
      </div>
      <style jsx>
        {`
          .container {
            min-width: 30rem;
            min-height: 80vh;
            border: 1px solid black;
            position: relative;
          }
          .message-list {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
}
