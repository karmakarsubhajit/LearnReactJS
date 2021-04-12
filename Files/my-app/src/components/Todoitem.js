import React from "react"
import '../index.css'



function Todoitem(props)
{
    const completedStyle ={
        fontStyle:"italics",
        color:"#cdefab",
        textDecoration:"line-through"
    }


    return(
    <div className="todo-item">
        <input onChange={()=>props.handleChange(props.todoItem.id)} type="checkbox" checked= {props.todoItem.completed}/>
        <p style={props.todoItem.completed?completedStyle:null}>{props.todoItem.text}</p>
    </div>)
}

export default Todoitem