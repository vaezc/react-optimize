import { useState, useCallback } from "react";
import Child from "./Child";
import "./App.css";

function App() {
  const [title, setTitle] = useState("This is title");
  const [subTitle, setSubTitle] = useState("This is subTitle");

  const callback = () => {
    setTitle("title is change");
  };

  const memoizedCallback = useCallback(callback, []);

  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <button onClick={() => setSubTitle("subTitle 已经改变")}>
        改变副标题
      </button>
      <Child name="vae" onClick={memoizedCallback}></Child>
    </div>
  );
}

export default App;
