export default function Message({ content, type, time }) {
  return (
    <li
      className={`container ${type}
       `}
    >
      <p className="message-content">{content}</p>
      {type !== "connection" && <time className="message-time">{time}</time>}
      <style jsx>
        {`
          .container {
            position: relative;
            bottom: 0;
            left: 0;
          }
        `}
      </style>
    </li>
  );
}
/*      <style jsx>
        {`
          .container {
            box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
            padding: 0.4rem 0.7rem;
            border-radius: 4px;
            margin: 0.3rem 0;
            min-width: 9rem;
            display: flex;
            flex-direction: column;
            font-size: 1.2rem;
            list-style: none;
          }
          .message-content {
            width: 80%;
            border: none;
            padding: 0;
            margin: 0;
          }
          .message-time {
            font-size: 0.59rem;
            align-self: flex-end;
          }
          .connection {
            min-width: 100%;
            justify-content: center;
            box-shadow: none;
            color: grey;
          }
          .self {
            justify-self: flex-end;
          }
          .align-self_left {
            align-self: flex-start;
          }
        `}
      </style>
      */

/*
      <style jsx>
        {`
          .container {
            margin: 0.3rem 0.3rem;
            padding: 0.8rem 1.1rem 0.8rem 1.1rem;
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
*/
