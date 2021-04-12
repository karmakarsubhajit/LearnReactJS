import React from "react"


class App extends React.Component
{
  constructor()
  {
    super()
      this.state={isLoggedIn:false}

      this.myFunc=this.myFunc.bind(this)
  }
  
  myFunc()
  {
    this.setState(prevState=>{
      return {
        isLoggedIn:!prevState.isLoggedIn
      }
    }
    )
  }

  render()
  {
    let buttonText = this.state.isLoggedIn?"Log out":"Log in"
    let buttonDisplay = this.state.isLoggedIn?"Logged In":"Logged Out"
    
    return(
      <div>
        <h1>{buttonDisplay}</h1>
        <button onClick={this.myFunc}>{buttonText} </button>
      </div>
    )
  }

}



export default App