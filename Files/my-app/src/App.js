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
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(id)
  {
    this.setState(prevState=>{
      const updatedTodos = prevState.todoComp.map(todo=>
        {
          if(todo.id===id){
            todo.completed=!todo.completed
          }
          return todo
        })
        return {
          todoComp:updatedTodos
        }
    }) 
  }

  render()
  {
    const todoComponents=this.state.todoComp.map(todo =>
      <Todoitem handleChange={this.handleChange} key ={todo.id} todoItem={todo}/>)

    return (<div className="todo-list">
      {todoComponents}
    </div>)
  }


}


export default App