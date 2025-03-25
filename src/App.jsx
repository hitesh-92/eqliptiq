import { useState, useEffect } from 'react'
import EqliptiqHeader from './components/eqliptiq'
import './App.css'

import UnderConstruction from './components/UnderConstruction'

import QuizSelect from './components/quizSelect'

function App() {
  const [quizRequest, setQuizRequest] = useState({
    confirmed: false,
    type: "",
    questions:0 
  })

  return(<UnderConstruction/>)
  
  return (
    <div className="quizContainer">

      <EqliptiqHeader />
      { 
        quizRequest.confirmed === true ?
        <p>Play Now //{quizRequest.type}/{quizRequest.confirmed}/{quizRequest.questions}</p> : 
        <QuizSelect 
          setQuizRequest={setQuizRequest}
          quizRequest={quizRequest}
        />
      }
    </div>
  )
}


export default App
