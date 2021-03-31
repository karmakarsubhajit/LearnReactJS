import React from "react"
import ReactDOM from "react-dom"

function MyInfo()
{
    return (
        <div style ={{color:"blue"}}>
            <h1>
                Subhajit Karmakar
            </h1>    
            <p>
                Seeking Antifragility | Polyglot
            </p>
            <ol>
                <li>Barjedov</li>
                <li>Paris</li>
                <li>New York</li>
            </ol>
        </div>
    )
}


ReactDOM.render(<MyInfo/>,document.getElementById("root"));