import React from "react"

function Joke(props)
{
    if(props.hasOwnProperty('Ques') && props.Ques.length!==0 ) 
    return(
        <div className="Joke">
            <h2>Question: {props.Ques}</h2>
            <h2>PunchLine: {props.Punch}</h2>
        </div>
    )
    else
    return(
        <div className="Joke">
            <h2 style={{textDecoration:"underline"}}>PunchLine: {props.Punch}</h2>
        </div>
    )
}



export default Joke