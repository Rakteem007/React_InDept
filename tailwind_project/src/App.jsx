import { useState } from "react";

const App = ({ details }) => {
  const [count, setCount] = useState(0);

  const [color, setColor] = useState("bg-slate-500");

  return (
    <div className={color}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="container">
        <p>Count : {count} </p>
        <div className="flex">
          <button onClick={() => setCount(count + 1)}> + </button>
          <button onClick={() => setCount(count - 1)}> - </button>
          <button onClick={() => setCount(0)}> reset </button>
        </div>
      </div>

      {details.map((detail) => (
        <div>
          <h2 className="text-gray-400">{detail.name}</h2>
          <h4>{detail.college}</h4>
          <p>{detail.subject}</p>
        </div>
      ))}

      <div className="flex">
        <button onClick={() => setColor("bg-red-600")}>red</button>
        <button onClick={() => setColor("bg-green-600")}>green</button>
        <button onClick={() => setColor("bg-yellow-600")}>yellow</button>
      </div>
    </div>
  );
};

export default App;
