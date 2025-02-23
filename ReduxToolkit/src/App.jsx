import { useState } from "react";
import { AddTodos, Todo } from "./components/index.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-white">REDUX TOOLKIT</h1>
      <AddTodos />
      <Todo />
    </>
  );
}

export default App;
