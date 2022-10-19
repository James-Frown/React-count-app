import { userState, useState } from "react";

export default function CounterClass() {
  const [counter, setCounter] = useState(0);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        justifyContent: "center",
        margin: "auto"
      }}
    >
      <button onClick={() => setCounter(counter + 1)} className="counter-btn">
        +
      </button>

      <span className="counter"> {counter} </span>

      <button onClick={() => setCounter(counter - 1)} className="counter-btn">
        -
      </button>

      <input type="text"></input>
    </div>
  );
}
