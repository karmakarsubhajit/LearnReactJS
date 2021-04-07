import React from "react"



class App extends React.Component{

  constructor()
  {
    super()
    {
      this.state = {isLoggedIn:true}
    }
  }

  render()
  {
    if(this.state.isLoggedIn)
    return (
      <div>
        <h1>You are currently logged in </h1>
      </div>
    )
    else
    return (
      <div>
        <h1>You are currently logged out </h1>
      </div>
    )
  }
}


export default App