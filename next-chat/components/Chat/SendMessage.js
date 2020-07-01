import { useState } from "react";

export default function SendMessage({ onClick, onTyping }) {
  const [value, setValue] = useState("");

  const onInputChange = (event) => {
    setValue(event.target.value);
    onTyping();
  };

  const onSendMessageHandler = () => {
    onClick(value);
    setValue("");
  };
  return (
    <div className="container">
      <input
        value={value}
        placeholder="Type a Message"
        onChange={onInputChange}
      />
      <button onClick={onSendMessageHandler}>send</button>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 0.1rem;
            height: 3rem;
          }
          .container input {
            width: 69%;
            padding: 0.5rem;
            border: 1px solid white;
            border-radius: 4px;
            height: 100%;
          }
          .container button {
            border-radius: 4px;
            color: white;
            height: 100%;
            background: #e91e63;
            border: none;
            width: 30%;
            outline: none;
          }
          .container button::-moz-focus-inner {
            border: none;
          }
          .container button:hover {
            cursor: pointer;
          }
          .container button:focus,
          .container button:active {
            outline: none;
          }
        `}
      </style>
    </div>
  );
}
