import React from "react";

export default function Child(props) {
  console.log(props.name);
  return <div>{props.name}</div>;
}
