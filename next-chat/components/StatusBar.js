export default function StatusBar({ time, status }) {
  return (
    <div className="container">
      <div className="time">
        {!status ? "Last Updated" : "Time"} : {time}
      </div>
      <div className="status">
        status :{status ? "connected" : "disconnected"}{" "}
      </div>
      <style jsx>
        {`
          .container {
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .time,
          .status {
            margin: 0 1rem;
          }
        `}
      </style>
    </div>
  );
}
