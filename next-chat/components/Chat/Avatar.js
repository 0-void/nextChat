export default function Avatar({ username }) {
  return (
    <div className="avatar">
      {username}
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
        `}
      </style>
    </div>
  );
}
//{!username ? "!" : username[0]}
