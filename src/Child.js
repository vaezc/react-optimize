import React, { useContext } from "react";
import GrayContext from "./context";
function Child(props) {
  console.log(props.name);
  const grayState = useContext(GrayContext);
  return (
    <div>
      <button onClick={props.onClick}>改标题</button>
      {props.name}
      {grayState.gray && <div>灰度字段</div>}
    </div>
  );
}

export default React.memo(Child);
