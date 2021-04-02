import React from "react"
import Todoitem from './components/Todoitem'
import './index.css'


function App()
{
    return (
    <div className="todo-list"> 
      <Todoitem/>
      <Todoitem/>
      <Todoitem/>
      <Todoitem/>
    </div>
    )
}


export default App