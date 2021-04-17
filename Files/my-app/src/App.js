import React, { Component } from "react"



class App extends Component{

  constructor(){
    super()
    this.state={firstName:"",
                lastName:"",
                age:"",
                gender:"",
                destination:"",
                isVegan:false,
                isKosher:false,
                isLactoseFree:false
            }

    this.handleChange = this.handleChange.bind(this)
  }
    
  
  handleChange(event)
  {
      const {name, value,type,checked} = event.target
      type==="checkbox"?
        this.setState({[name]:checked}) 
        :this.setState({[name]:value})
  }


  render(){
    return (
    <main>
      <form>
        <input onChange={this.handleChange} value={this.state.firstName} name="firstName" placeholder="First name"/>
        <br/>
        <input onChange={this.handleChange} value={this.state.lastName} name="lastName" placeholder="Last Name"/>
        <br/>
        <input onChange={this.handleChange} value={this.state.age} name="age" placeholder="Age"/>
        
        <br/>
        <label>
        <input onChange={this.handleChange}  value="male" name="gender" type="radio" checked={this.state.gender==="male"} />
        Male
        </label>
        <br/>
      
        <label>
        <input onChange={this.handleChange}  value="female" name="gender" type="radio" checked={this.state.gender==="female"} />
        Female
        </label>
        <br/>

        <label>
        <input onChange={this.handleChange}  value="others" name="gender" type="radio" checked={this.state.gender==="others"} />
        others
        </label>
        <br/>


        <select onChange={this.handleChange} value={this.state.destination} name="destination">
        <option value="">----Please choose a destination----</option>
          <option value="Germany">Germany</option>
          <option value="Norway">Norway</option>
          <option value="North Pole">North Pole</option>
          <option value="South Pole">South Pole</option>
        </select>
        <br/>
        
        <label>
          <input type="checkbox" 
                name="isVegan"
                onChange={this.handleChange}
                checked={this.state.isVegan}/>
            Vegan?
        </label>
        <br/>

        <label>
          <input type="checkbox" 
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}/>
            Kosher?
        </label>

        <br/>
        

        <label>
          <input type="checkbox" 
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}/>
              LactoseFree?
        </label>

        <h1>Entered Information:</h1>
        <h4>Your name: {this.state.firstName} {this.state.lastName}  </h4>
        <h4>Your age: {this.state.age} </h4>
        <h4>Your gender: {this.state.gender} </h4>
        <h4>Your destination: {this.state.destination} </h4>
        <h4>
            Your dietary restrictions:</h4>
        <p> {this.state.isVegan?" Vegan":""} {this.state.isKosher?", Kosher":""} {this.state.isLactoseFree?", LactoseFree":""}</p>
        <button>Submit! </button>
      </form>
    </main>)
  }
}

export default App