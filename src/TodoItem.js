import React, { useState } from "react";
import todosData from "./todosData";
import trash from "./App/trash.png";

export default function TodoItem(props) {
  /*
  const [checked, setChecked] = useState(props.item.completed);
  let textStyle = checked
    ? { textDecoration: "line-through", color: "lightgrey" }
    : null;

  const [deleted, setDeleted] = useState(props.item.deleted);

 

  function onChangeHandler() {
    setChecked(!checked);

    for (let item of todosData) {
      if (item.id == props.item.id) {
        item.completed = !checked;
      }
    }
  }

  function onClickHandler() {
    setDeleted(!deleted);
    for (let item of todosData) {
      if (item.id == props.item.id) {
        item.deleted = !deleted;
      }
    }
  } */

  console.log("esse é o props TEXT:", props.item[0].text);

  return (
    <>
      {props.item.map((item) => {
        <div>
          <p>{item.text}</p>
        </div>;
      })}
    </>
  );
}
