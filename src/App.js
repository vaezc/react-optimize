import { useState, useCallback, useMemo, useEffect } from "react";
import Child from "./Child";
import { OtherChild } from "./OtherChild";
import "./App.css";
import GrayState from "./GrayState";

function App() {
  const [title, setTitle] = useState("This is title");
  const [subTitle, setSubTitle] = useState("This is subTitle");
  const [num, setNum] = useState(0);

  const callback = () => {
    setTitle("title is change");
  };

  const memoizedCallback = useCallback(callback, []);

  function expensiveFn() {
    let result = 0;

    for (let i = 0; i < 100000; i++) {
      result += i;
    }

    console.log(result);
    return result;
  }

  const base = useMemo(expensiveFn, []);

  useEffect(() => {
    console.log("get GrayState");
    setTimeout(() => {
      console.log("Get GrayState");
      const nextStatus = {
        gray: true,
      };
      GrayState.updateStatus(nextStatus);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <button onClick={() => setSubTitle("subTitle 已经改变")}>
        改变副标题
      </button>
      <Child name="vae" onClick={memoizedCallback}></Child>

      <h1>count: {num}</h1>
      <button onClick={() => setNum(num + base)}>+1s</button>
      <OtherChild></OtherChild>
    </div>
  );
}

export default App;
