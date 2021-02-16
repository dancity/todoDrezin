import React, { useState, useMemo, useEffect } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [display, setDisplay] = useState([]);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const teste = JSON.parse(localStorage.getItem("todos"));
    if (teste) {
      console.log("entrei no if");
      setDisplay([todo]);
    }
  }, [todo]);

  //<TodoItem key={item.id} item={item} />

  function submitHandler(event) {
    event.preventDefault();
    const data = [
      {
        id: display.length + 1,
        text: event.target[0].value,
        completed: false,
        deleted: false,
      },
    ];
    setDisplay([...display, data]);
    //setDisplay(todosData.map((item) => <TodoItem key={item.id} item={item} />));
    event.target[0].value = "";
  }

  useEffect(() => {
    if (display.length !== 0) {
      console.log("Display dentro:", display);
      const tesao = display?.map((item) => item[0]);
      console.log({ tesao });
      setTodo([tesao]);
      localStorage.setItem("todos", JSON.stringify(tesao));
    }
  }, [display]);

  return (
    <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, padding: 50 }} >
      <div className="input-box" >
        <form onSubmit={submitHandler}>
          <input type="text" name="inputTarefa" placeholder="Nova tarefa" />
          <button className="myButton" type="submit">
            Adicionar
          </button>
        </form>
      </div>
      {todo.length !== 0 ? (
        todo.map((item) => <TodoItem key={item.id} item={item} />)
      ) : (
          <p>Ola tudo bem</p>
        )}
    </div>
  );
}

export default App;
