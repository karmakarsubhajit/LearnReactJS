import React from "react"
import ReactDOM from "react-dom"

function MyApp()
{
    return  (
        <ul>
            <li>Helsinki</li>
            <li>Barjedov</li>
            <li>Bratislava</li>
        </ul>
    )
}

ReactDOM.render(
    <MyApp/>, 
    document.getElementById("root"))