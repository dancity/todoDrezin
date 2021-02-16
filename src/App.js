import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [todo, setTodo] = useState([]);
  const [save, setSave] = useState([]);

  useEffect(() => {
    const teste = JSON.parse(localStorage.getItem("todos"));
    const teste2 = teste?.map(item => item[0]);
    if (teste2) {
      console.log({ teste2 });
      setTodo([...todo, teste2]);
    }
  }, []);

  function submitHandler(event) {
    event.preventDefault();
    const data = [
      {
        id: todo.length + 1,
        text: event.target[0].value,
        completed: false,
        deleted: false,
      },
    ];
    setTodo([...todo, data]);
    setSave(data);
    event.target[0].value = "";
  }

  useEffect(() => {
    if (save.length !== 0) {
      console.log('ENTREI NESSA PORRA INFERNO', save)
      localStorage.setItem("todos", JSON.stringify(save));
    }
  }, [save]);

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
