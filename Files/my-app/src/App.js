import React from "react"
import Todoitem from './components/Todoitem'
import todosData from './todosData'
import './index.css'


function App()
{
    const todoComponents = todosData.map(todo=>
        <Todoitem key={todo.id} todoList={todo}/>)


    return (
    <div className="todo-list"> 
      {todoComponents}
    </div>
    )
}


export default App