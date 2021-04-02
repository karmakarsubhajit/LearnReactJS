import React from "react"
import ReactDOM from "react-dom"

function App()
{
    const date = new Date()
    const hours = date.getHours()
    let greetings

    if(hours<12)
        greetings = "morning"
    else if(hours>=12 && hours<17)
        greetings = "afternoon"
    else
        greetings = "night"

    const styles={color:"yellow",backgroundColor:"#12FE4A",fontSize:20}

    return (<h1 style ={styles}>Good {greetings}</h1>)
}


ReactDOM.render(<App/>,document.getElementById("root"))


