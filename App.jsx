import { useEffect, useState } from "react";
import "./styles.css"
import Form from "./Form";
import List from "./List";


export default function App (){
  const [todo, setTodo] = useState(()=> {
    const localValue = localStorage.getItem("ITEM");
    if(localValue === null) return [];
    return JSON.parse(localValue)
  });

    useEffect(()=>{
      localStorage.setItem("ITEM",JSON.stringify(todo))
    },[todo])


  function addTodo(title){
        setTodo(todos =>{
            return [...todos, {id: title,completed:false}]
        }
        )
  }

  function handleDelete(id){
    setTodo(tod =>{
      return tod.filter(dos => dos.id !== id)
      }
    )
  }

  function toggleTodo(id, completed){
        setTodo(tod =>{
          return tod.map(dos => {
            if(dos.id === id){
              return {...dos, completed}
          }
          return dos
        })
      }
        )
    }
  return(
    <>
<div className="main">
  <Form addTodo={addTodo}/>
    <div className="tasks">
      <h1>TO-DO LIST</h1>
      <List todo={todo} handleDelete={handleDelete} toggleTodo={toggleTodo}/>
    </div>
</div>
</>
  )
}
