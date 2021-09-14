import React from "react";
import useGray from "./useGray";

function Child(props) {
  console.log(props.name);

  const visible = useGray("gray");

  return (
    <div>
      <button onClick={props.onClick}>改标题</button>
      {props.name}
      {visible && <div>灰度字段</div>}
    </div>
  );
}

export default React.memo(Child);
