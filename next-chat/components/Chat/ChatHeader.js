import Avatar from "./Avatar";

export default function ChatHeader({ title, members }) {
  return (
    <div className="title">
      <Avatar username={title} />
      <div>online : {members.length - 1 !== 0 ? members.length : 0}</div>
      <style jsx>
        {`
          .title {
            text-transform: capitalize;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 0.4rem 0.9rem;
            font-size: 1.9rem;
            width: 100%;
            height: 4rem;
            background: #e91e63;
            color: white;
          }
          .title div {
            margin-left: 1rem;
          }
        `}
      </style>
    </div>
  );
}
