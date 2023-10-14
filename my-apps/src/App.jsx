import { useState } from "react";
import "./styles.css"

export default function App (){
  const [newItem, setNewItem] = useState('');
  const [todo, setTodo] = useState([]);

  function handleAdd(){
    setTodo(copy =>{
      return [...copy, {id: newItem,completed:false}]

    }

    )
  }
  function handleDelete(){
    setTodo(copy =>{
      return [...copy.slice(0,-1)]
    }

    )
  }
  console.log(todo[0])
  return(
    <>
<div className="main">
<div className="wrapper">
      <h1>Add item</h1>
      <label htmlFor="search"></label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="search" />
      <button onClick={handleAdd}>Add</button>
    </div>
    <div className="tasks">
      <h1>TO-DO LIST</h1>
      <ul>
        {todo.map( (e) => {
          return(
          // eslint-disable-next-line react/jsx-key
          <li>
          <label>
            <input type="checkbox" checked={e.completed} />
            <p>{e.id}</p>
          </label>
          <button className="delete" onClick={handleDelete}>Delete</button>
        </li>
          )
        })}
      </ul>
    </div>
</div>
</>
  )
}
