import React, { useState } from "react";

function Note(props) {
  const [completada, setCompletada] = useState(false);

  function handleCompleteClick() {
    setCompletada(true); // Mark as completed
  }

  function handleClick() {
    props.onDelete(props.id); // Delete the note by its id
  }

  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();
  const fechaFormateada = `${dia}/${mes}/${anio}`;

  return (
    <div className="note">
      <div className="top">
        <h1 className="title">{props.title}</h1>
      </div>
      <div className="info">
        <p className="content">{props.content}</p>
      </div>
      <p>Fecha: {fechaFormateada}</p>
      <button className="delete" onClick={handleClick}>
        DELETE
      </button>
      {completada ? (
        <p>Hecho</p>
      ) : (
        <button className="complete" onClick={handleCompleteClick}>
          ✓
        </button>
      )}
    </div>
  );
}

export default Note;
