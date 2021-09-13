import { useState } from "react";
import Child from "./Child";
import "./App.css";

function App() {
  const [title, setTitle] = useState("This is title");

  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={() => setTitle("title 已经改变")}>改名字</button>
      <Child name="vae"></Child>
    </div>
  );
}

export default App;
