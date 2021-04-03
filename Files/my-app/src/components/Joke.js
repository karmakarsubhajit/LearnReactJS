import React from "react"

function Joke(props)
{
    if(props.jok.hasOwnProperty('Ques') && props.jok.Ques.length!==0 ) 
    return(
        <div className="Joke">
            <h2>Question: {props.jok.Ques}</h2>
            <h2>PunchLine: {props.jok.Punch}</h2>
        </div>
    )
    else
    return(
        <div className="Joke">
            <h2 style={{textDecoration:"underline"}}>PunchLine: {props.jok.Punch}</h2>
        </div>
    )
}



export default Joke