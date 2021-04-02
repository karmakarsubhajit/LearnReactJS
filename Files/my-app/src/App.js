import React from "react"
import ContactCard from "./components/ContactCard"


function App()
{
  return (
    <div className="contacts">
      <ContactCard 
      contact ={{name:"Whiskers",imgUrl:"http://placekitten.com/300/200",phone:"212 234-3417",
      email:"whska@nap.com"
      }}
      />
      <ContactCard 
      contact={{name:"Purrtens",
      imgUrl:"http://placekitten.com/400/200",
      phone:"213 434-3417",
      email:"purrten@nap.com"}}
      />
      <ContactCard 
      contact={{
      name:"Meaaoww",
      imgUrl:"http://placekitten.com/400/300",
      phone:"214 554-3417 ",
      email:"Meaaowwn@nap.com"}}
      />
      <ContactCard 
      contact={{
      name:"Felix",
      imgUrl:"http://placekitten.com/200/100",
      phone:"215 321-3321",
      email:"CoolFelix@nap.com"}}
      />
     
    </div>
  )
}

export default App