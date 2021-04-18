import React from "react"

function FormComponent(props) 
{
    return (
        <main>
          <form>
            <input onChange={props.handleChange} value={props.data.firstName} name="firstName" placeholder="First name"/>
            <br/>
            <input onChange={props.handleChange} value={props.data.lastName} name="lastName" placeholder="Last Name"/>
            <br/>
            <input onChange={props.handleChange} value={props.data.age} name="age" placeholder="Age"/>
            
            <br/>
            <label>
            <input onChange={props.handleChange}  value="male" name="gender" type="radio" checked={props.data.gender==="male"} />
            Male
            </label>
            <br/>
          
            <label>
            <input onChange={props.handleChange}  value="female" name="gender" type="radio" checked={props.data.gender==="female"} />
            Female
            </label>
            <br/>

            <label>
            <input onChange={props.handleChange}  value="others" name="gender" type="radio" checked={props.data.gender==="others"} />
            others
            </label>
            <br/>


            <select onChange={props.handleChange} value={props.data.destination} name="destination">
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
                    onChange={props.handleChange}
                    checked={props.data.isVegan}/>
                Vegan?
            </label>
            <br/>

            <label>
              <input type="checkbox" 
                  name="isKosher"
                  onChange={props.handleChange}
                  checked={props.data.isKosher}/>
                Kosher?
            </label>

            <br/>
            

            <label>
              <input type="checkbox" 
                  name="isLactoseFree"
                  onChange={props.handleChange}
                  checked={props.data.isLactoseFree}/>
                  LactoseFree?
            </label>

            <h1>Entered Information:</h1>
            <h4>Your name: {props.data.firstName} {props.data.lastName}  </h4>
            <h4>Your age: {props.data.age} </h4>
            <h4>Your gender: {props.data.gender} </h4>
            <h4>Your destination: {props.data.destination} </h4>
            <h4>
                Your dietary restrictions:</h4>
            <p> {props.data.isVegan?" Vegan":""} {props.data.isKosher?", Kosher":""} {props.data.isLactoseFree?", LactoseFree":""}</p>
            <button>Submit! </button>
          </form>
        </main>)

}

export default FormComponent