// eslint-disable-next-line react/prop-types
export default function Item({ id,completed, handleDelete, toggleTodo }){
    return(
        <li>
        <label>
        <input type="checkbox" checked={completed} onChange={(e)=>{toggleTodo(id, e.target.checked)}} />
        <p>{id}</p>
        </label>
        <button className="delete" onClick={ () => handleDelete(id)}>Delete</button>
        </li>
    )
}