import React from "react"
import Todoitem from './components/Todoitem'
import todosData from './todosData'
import './index.css'



class App extends React.Component
{
  constructor()
  {
    super()
    {
        this.state={
          todoComp:todosData
        }
    }
  
  }

  render()
  {
    const todoComponents=this.state.todoComp.map(todo =>
      <Todoitem key ={todo.id} todoList={todo}/>)

    return (<div className="todo-list">
      {todoComponents}
    </div>)
  }


}


export default App