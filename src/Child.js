import React from "react";

function Child(props) {
  console.log(props.name);
  return (
    <div>
      <button onClick={props.onClick}>改标题</button>
      {props.name}
    </div>
  );
}

export default React.memo(Child);
