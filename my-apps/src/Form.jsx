import { useState } from "react";


// eslint-disable-next-line react/prop-types
export default function Form({ addTodo }){
    const search = document.querySelector("[type='text']");
    const [newItem, setNewItem] = useState('');
    function handleAdd(){
        if(newItem === ''){return}


        addTodo(newItem)

        setNewItem("")
    }
    return (
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
    )

}