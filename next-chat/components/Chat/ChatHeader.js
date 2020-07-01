import Avatar from "./Avatar";

export default function ChatHeader({ title, typing, members }) {
  return (
    <div className="container">
      <div className="title">
        <Avatar type="username" username={title} />
        <div className="online">
          {members.length - 1 !== 0 ? members.length : 0}
        </div>
      </div>
      {typing.isTyping && (
        <div className="typing">
          <b>{typing.username}</b> is typing...
        </div>
      )}
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: space-between;
          }
          .title {
            display: flex;
            font-family: inherit;
            margin: 0.5rem 0.8rem;
            align-items: center;
            justify-content: space-between;
          }
          .online {
            background: #ccc;
            border-radius: 50%;
            width: 0.7rem;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 0.7rem;
            padding: 0.76rem;
          }
          .typing {
            align-self: center;
            font-size: 0.9rem;
          }
        `}
      </style>
    </div>
  );
}

