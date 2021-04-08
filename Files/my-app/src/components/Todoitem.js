import React from "react"
import '../index.css'


function Todoitem(props)
{
    return(
    <div className="todo-item">
        <input onChange={()=>props.handleChange(props.todoItem.id)} type="checkbox" checked= {props.todoItem.completed}/>
        <p>{props.todoItem.text}</p>
    </div>)
}


export default Todoitem