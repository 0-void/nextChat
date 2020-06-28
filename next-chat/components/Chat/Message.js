export default function Message({ content, time }) {
  return (
    <li className="container">
      <div className="message-content">{content}</div>
      <time className="message-time">{time}</time>
      <style jsx>
        {`
          .container {
            height: 2.7rem;
            padding: 0 0.7rem;
            box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            list-style: none;
            display: flex;
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
            bottom: 0.5rem;
            right: 0.5rem;
            font-size: 0.6rem;
          }
        `}
      </style>
    </li>
  );
}
