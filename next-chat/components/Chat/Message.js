import Avatar from "./Avatar";

export default function Message({ content, type, time }) {
  return (
    <li
      className={`container ${type} ${
        type === "connection" && "connection-type" && "center-text"
      } `}
    >
      <div className="message-content">{content}</div>
      <time className="message-time">{time}</time>
      <style jsx>
        {`
          .container {
            margin: 0.3rem 0.3rem;
            padding: 0.8rem 1.1rem 0.8rem 1.1rem;
            box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            list-style: none;
            display: flex;
            min-width: 6rem;
            align-items: center;
            justify-content: flex-start;
            position: relative;
          }
          .message-content {
            marign: 0 0.8rem 0 0;
            font-size: 1.2rem;
          }
          .message-time {
            position: absolute;
            bottom: 0.3rem;
            right: 0.3rem;
            font-size: 0.6rem;
          }
          .self {
            align-self: flex-end;
          }
          .align-self_left {
            align-self: flex-start;
          }
          .connection {
            align-self: center;
          }
          .center-text {
            color: #ccc;
            box-shadow: none;
            justify-content: center;
          }
          .connection-type {
            height: 2.3rem;
            margin: 0.5rem 0.3rem;
            padding: 0.3 0.8rem;
            border-radius: 4px;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
        `}
      </style>
    </li>
  );
}
