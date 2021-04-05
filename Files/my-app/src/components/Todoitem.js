import React from "react"
import '../index.css'

function Todoitem(props)
{
    return(
    <div className="todo-item">
        <input type="checkbox" checked={props.todoList.completed}/>
        <p>{props.todoList.text}</p>
    </div>)
}


export default Todoitem