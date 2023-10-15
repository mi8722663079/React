import { useState } from "react";
import "./styles.css"

export default function App (){
  const [newItem, setNewItem] = useState('');
  const [todo, setTodo] = useState([]);
  const search = document.querySelector("[type='text']");

  function handleAdd(){
    setTodo(todos =>{
        return [...todos, {id: newItem}]
      }
    )
    setNewItem("")
  }

  function handleDelete(id){
    return todo.map(dos => {
      if(dos.id === id){
        setTodo( todo.filter(dos => dos.id !== id))
      }
    })
  }
  return(
    <>
<div className="main">
<div className="wrapper">
      <h1>Add item</h1>
      <label htmlFor="search"></label>
      <input
        type="text" id="search"
        value={newItem}
        onKeyDown={e =>{ if(e.target.value === ''){return}  e.key == "Enter"&&handleAdd()}}
        onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={() =>{if(search.value === ''){return} handleAdd()}}>Add</button>
    </div>
    <div className="tasks">
      <h1>TO-DO LIST</h1>
      <ul>
        {todo.length == 0 &&"No Tasks"}
        {todo.map( (e) => {
          return(
          // eslint-disable-next-line react/jsx-key
          <li key={e.id}>
          <label>
            <input type="checkbox" />
            <p>{e.id}</p>
          </label>
          <button className="delete" onClick={()=> handleDelete(e.id)}>Delete</button>
        </li>
          )
        })}
      </ul>
    </div>
</div>
</>
  )
}
