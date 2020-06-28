import { useState } from "react";

export default function SendMessage({ onClick }) {
  const [value, setValue] = useState("");

  const onInputChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="container">
      <input
        value={value}
        placeholder="Type a Message"
        onChange={onInputChange}
      />
      <button onClick={onClick.bind(this, value)}>send</button>
      <style jsx>
        {`
          .container {
            position: absolute;
            width: 70%;
            height: 1.8rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            bottom: 1rem;
          }
          .container input {
            width: 75%;
            height: 80%;
            border-radius: 100px;
            outline: none;
            border: 1px solid #ccc;
            padding: 0.7rem;
            margin: 0 0.5rem;
          }
          .container button {
            border-radius: 100px;
            border: none;
            margin: 0 0.5rem;
            width: 25%;
            height: 3.4rem;
            color: #0070f3;
          }
          .container button:hover {
            cursor: pointer;
          }
          .container button:focus,
          .container button:active {
            outline: none;
            box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.1);
            background: white;
          }
        `}
      </style>
    </div>
  );
}
