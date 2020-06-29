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
            position: absolute;
            width: 100%;
            height: 2.8rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            bottom: 0.3rem;
          }
          .container input {
            width: 73%;
            border-radius: 4px;
            outline: none;
            border: 1px solid #ccc;
            height: 100%;
            padding: 0 0.7rem;
          }
          .container button {
            border-radius: 4px;
            color: white;
            border: none;
            height: 100%;
            width: 20%;
            background: #0070f3;
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
