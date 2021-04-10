import React from "react"

class App extends React.Component {

  constructor()
  {
      super()
      this.state = {
        answer:"Yes"
      }
  }

  // componentWillMount(){


  // }

  componentDidMount(){

  }

  shouldComponentUpdate(nextProps, nextState){

  }
  // componentWillUpdate(){
    
  // }

  componentWillUnmount(){

  }

  render(){
      return (
          <div>
            <h1>Is state imp? {this.state.answer}</h1>
          </div>
      )
  }
}

export default App