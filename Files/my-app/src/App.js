import React from "react"
import Conditional from './Components/Conditional'

class App extends React.Component {

  constructor()
  {
      super()
      this.state = {
        unreadMessages:["Call your won!",
      "New spam email available. All links are definitely safe to click"]
    }
  }


  render(){
      return (
          <div>
            {this.state.unreadMessages.length>0 && 
            <h2> You have {this.state.unreadMessages.length} unread messages </h2>
            }
          </div>
      )
  }
  
}

export default App