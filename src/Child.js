import React, { useEffect, useState } from "react";
import GrayState from "./GrayState";

function Child(props) {
  console.log(props.name);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const changeVisible = (status) => {
      setVisible(status.gray);
    };
    GrayState.attach(changeVisible);
    return () => {
      GrayState.detach(changeVisible);
    };
  }, []);

  return (
    <div>
      <button onClick={props.onClick}>改标题</button>
      {props.name}
      {visible && <div>灰度字段</div>}
    </div>
  );
}

export default React.memo(Child);
