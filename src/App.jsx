import { useState, useEffect } from 'react'
import EqliptiqHeader from './components/eqliptiq'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [quizSelected, setQuizSelected] = useState(false)
  const [quizData, setQuizData] = useState({})

  return(

    <div style={{ padding:"5em 10em"}}>
      <EqliptiqHeader />
      <h3>Test your limits and enter mastry</h3>
      <p>{`"From struggle to flow, from thought to instinct—the art of mastery is becoming what you do."${`\n`}`}<em>- Abaraham Maslow</em></p>
      <p style={{marginTop:"10vh"}}>Eqliptiq (ec-lip-tic) is a multi-sensory quiz-based learning platform</p>
      <p>Inspired by techniques from mad geniuses like Salvitore Dali to PhD Academics</p>
      <p style={{textAlign:"center"}}><em>Discover Here... Coming soon...</em></p>
    </div>

  )

  return (
    <div>
      <EqliptiqHeader />
      <h3>Test your limits</h3>
      <div className="card">
        <p>Select the number of question in your quiz:</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          *Questions will be selected at random
        </p>
      </div>

      {
        quizSelected ?
        <QuizSelect /> :
        <QuizPlay/>
      }     

      
    </div>
  )
}

function QuizSelect(){
  const [showFastFive, setShowFastFive] = useState(true)
  const [showCustomQuiz, setShowCustomQuiz] = useState(true)
  

  const quizList = [
    "Fast Five (random)",
    "Custom Quiz"
  ].map(title => {
    <div>
      <p style={{ color:white }}>{title}</p>
      < button onClick={ () => {
        
        const custom = title === "Custom Quiz" 
        setQuizData(getQuizData(custom? true : false))
        
        // setQuizSelected:true        
        setShowCustomQuiz(!showCustomQuiz)
        setShowFastFive(!showFastFive)
        setQuizSelected(!quizSelected)
        // setQuizSelected:true
        // put up loader
        // getQuiz
        // setQuizData
        //Enter Quiz

       }} ></button>
    </div>
  })

  return(<>{quizList}</>)
 

}

function QuizPlay(){
  return(<p>Play</p>)
}

function getQuizData(isCustom){

}

export default App
