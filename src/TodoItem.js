import React from "react";
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


  return (
    <>
      {props.item.map((item) => (
        <div className="todo-item" >
          <input
            id={item.id}
            name={item.id}
            type="checkbox"
            checked={item.completed}
            onChange={() => props.checkFunction(item.id)}
          />
          <label htmlFor={item.id} >
            {item.text}
          </label>
          <div
            className="trash-icon"
            onClick={() => props.deleteFunction(item.id)}
          >
            <img src={trash} alt="trash-can"></img>
          </div>
        </div>
      ))
      }
    </>
  );
}
