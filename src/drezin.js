import React from "react";

export default function Drezin() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="testin" />
        <button type="submit">Botão</button>
      </form>
    </div>
  );
}
