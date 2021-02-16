import React, { useState, useMemo, useEffect } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const teste = JSON.parse(localStorage.getItem("todos"));
    console.log("qualquer merda", teste);
    if (teste) {
      console.log("entrei no if");
      setDisplay([...display, teste]);
    }
  }, []);

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
      console.log("Teste do tesao", tesao);
      //  localStorage.setItem("todos", JSON.stringify(tesao));
    }
  }, [display]);

  return (
    <div>
      <div className="input-box">
        <form onSubmit={submitHandler}>
          <input type="text" name="inputTarefa" placeholder="Nova tarefa" />
          <button className="myButton" type="submit">
            Adicionar
          </button>
        </form>
      </div>
      {display.length !== 0 ? (
        display.map((item) => <TodoItem key={item.id} item={item} />)
      ) : (
        <p>Ola tudo bem</p>
      )}
    </div>
  );
}

export default App;
