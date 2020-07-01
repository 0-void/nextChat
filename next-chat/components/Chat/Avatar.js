export default function Avatar({ username, type }) {
  return (
    <div className={`avatar ${type}`}>
      {type === "username" ? username : !username ? "!" : username[0]}
      <style jsx>
        {`
          .avatar {
            font-family: inherit;
            border-radius: 62px;
            letter-spacing: 0.5px;
            background: #e91e63;
            color: white;
            padding: 0.4rem 1.4rem;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .message {
            margin: 0 0.4rem;
            border-radius: 50%;
            padding: 0;
            width: 1.7rem;
            height: 1.7rem;
          }
        `}
      </style>
    </div>
  );
}
