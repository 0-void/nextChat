export default function Avatar({ username }) {
  return (
    <div className="avatar">
      {!username ? "!" : username[0]}

      <style jsx>
        {`
          .avatar {
            border-radius: 50%;
            width: 2.9rem;
            background: black;
            height: 2.9rem;
            color: white;
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
