import React from "react"
import Joke from "./components/Joke"


function App ()
{
  return(
  <div className="JokeList">
    <Joke jok = 
      {{Ques:"A",Punch:"A1"
      }}
      />
      <Joke jok = 
      {{Ques:"B",Punch:"B1"
      }}
      />
      <Joke jok = 
      {{Ques:"C",Punch:"C1"
      }}
      />
      <Joke jok = 
      {{Ques:"D",Punch:"D1"
      }}
      />
      <Joke jok = 
      {{Ques:"E",Punch:"E1"
      }}
      />
  </div>
  )
}
export default App
