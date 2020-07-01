import Avatar from "./Avatar";

export default function Message({ content, type, time }) {
  return (
    <div className={`message-container ${type}`}>
      {type !== "self" && type !== "connection" && (
        <Avatar type="message" username="H" />
      )}
      <li
        className={`container ${type === "connection" && "connection"}
       `}
      >
        <div className="message-content">{content}</div>
        {type !== "connection" && <time className="message-time">{time}</time>}
      </li>
      <style jsx>
        {`
          .message-container {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container {
            list-style: none;
            box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
            margin: 0.3rem 0.3rem;
            background: white;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
            padding: 0.2rem 0.4rem;
          }
          .connection {
            background: none;
          }
          .container div {
            font-size: 0.9rem;
            margin: 0;
          }

          .message-time {
            align-self: flex-end;
            margin: 0 0.3rem;
            color: #ccc;
            font-size: 0.51rem;
          }
          .connection {
            align-self: center;
            color: #ccc;
            box-shadow: none;
            background: none;
          }
          .self {
            align-self: flex-end;
          }
          .align-self_left {
            align-self: flex-start;
          }
        `}
      </style>
    </div>
  );
}
