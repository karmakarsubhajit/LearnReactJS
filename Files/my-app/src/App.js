import React from "react"
import Joke from "./components/Joke"
import jokesData from "./jokesData"


function App ()
{

  const jokeComponents = jokesData.map(joke=>
        <Joke key={joke.id} Ques={joke.Ques} Punch={joke.Punch}/>)

      return (
        <div>
          {jokeComponents}
        </div>)
}

export default App
