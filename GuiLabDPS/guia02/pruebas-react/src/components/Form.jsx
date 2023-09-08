import React,{useState} from 'react';
import Todo from "./todo"

const Form = () => {
  const [todo,setTodo] = useState({});
  const [todos,setTodos] = useState([
    {
      nombre:"Juan Carlos",
      apellido:"Marroquin",
      numero:"78874994",
      
  },
  {
      "nombre": "Edwin Ivan",
      "apellido": "Reyes Figueroa",
      "numero": "22886545",
     
  },
  {
      "nombre": "Josue Eduardo",
      "apellido": "Fuentes",
      "numero": "45568734",
      
  }
  ])

  const handleChange = e => setTodo({[e.target.name]: e.target.value})
  const handleClick = e => {
    if(Object.keys(todo).length === 0){
      alert("espacios en blanco no");
      return
    }
    setTodos([...todos,todo])
  }

  const deleteTodo = (indice) =>{
    const newTodos = [...todos]
    newTodos.splice(indice,1)
    setTodos(newTodos)
  }

  return(
    <>
      <form onSubmit={e=>e.preventDefault()}>
        <label>Agregar tarea</label><br />
        <input type="text" name='nombre' onChange={handleChange} />
        <input type="text" name='apellido' onChange={handleChange} />
        <input type="text" name='numero' onChange={handleChange} />
        <button onClick={handleClick}>Agregar</button>
      </form>
      {
        todos.map((value,index)=>(
          <Todo nombre={value.nombre} apellido={value.apellido} numero={value.numero}></Todo>
        ))
      }
    </>
  )
    
};

export default Form