import React from "react"

const Todo = ({ nombre,apellido,numero,index,deleteTodo }) => {
    return (
      <>
      <div className="list">
        <h3>{nombre}</h3>
        <h3>{apellido}</h3>
        <h3>{numero}</h3>
        <button className="btn-delete" onClick={()=> deleteTodo(index)}>x</button>
      </div>
      </>
    );
  };
  
  export default Todo;