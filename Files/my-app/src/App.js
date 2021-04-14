import React from "react"

class App extends React.Component {

  constructor()
  {
      super()
      this.state = {
        firstName:"",
        lastName:"",
        isFriendly:true,
        gender:"",
        favColor:"blue"
      }
      
      this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event)
  {
    const {name,value,type,checked} = event.target
    type==="checkbox"?this.setState({[name]:checked}): this.setState({
      [name]:value
    })
  }
  
  render(){
      return (
          <form >
            <input type="text" value={this.state.firstName} name="firstName" placeholder="first name" onChange={this.handleChange}/>
           <br/>
            <input type="text" value={this.state.lastName} name="lastName" placeholder="last name" onChange={this.handleChange}/>
            
            <textarea value={"Some default"}
            onChange={this.handleChange} />

            <br/>
            
            <label>
            
            <input type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}/>
            Is isFriendly?
            </label>
            
          <br/>

            <label>
            <input type="radio"
            name="gender"
            value="male"
            checked={this.state.gender==="male"}
            onChange={this.handleChange}/>
            Male
            </label>
            
            <br/>
            
            <label>
            <input type="radio"
            name="gender"
            value="female"
            checked={this.state.gender==="female"}
            onChange={this.handleChange}/>
            Female
            </label>

            <br/>

            <label>Fav color</label>

            <select value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor">
              <option value="red">red</option>
              <option value="green">green</option>
              <option value="orange">orange</option>
            </select>
            
            
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <h2>You are a {this.state.gender}</h2>
            <h2>Fav color is {this.state.favColor}</h2>
            <button>Submit</button>
          </form>
      )
  }
}

export default App