export default function ChatHeader({ title }) {
  return (
    <div className="title">
      {title}
      <style jsx>
        {`
          .title {
            font-size: 3.2rem;
            font-weight: bolder;
            height: 5rem;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
