import Item from "./Item";
// eslint-disable-next-line react/prop-types
export default function List({ todo ,handleDelete, toggleTodo }){
    return(
        <ul>
        {
        // eslint-disable-next-line react/prop-types
        todo.length == 0 &&"No Tasks"
        }
        {
        // eslint-disable-next-line react/prop-types
        todo.map((e) => {
        return(
        <Item {...e} key={e.id} handleDelete={handleDelete} toggleTodo={toggleTodo}/>
        )
        })}
        </ul>
    )
}