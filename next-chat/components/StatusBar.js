export default function StatusBar({ time, status }) {
  return (
    <div className="container">
      <div className="time">
        <b>{!status ? "Time" : "Time"}</b> {time}
      </div>
      <div className="status">
        <b>Status</b> {status ? "connected" : "disconnected"}
      </div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
          .container {
            display: flex;
            margin: 0.8rem 1rem;
            align-items: flex-start;
            justify-content: space-between;
          }
          .time,
          .status {
            font-size: 0.6rem;
            letter-spacing: 0.5px;
            font-family: "Orbitron", sans-serif;
          }
        `}
      </style>
    </div>
  );
}
