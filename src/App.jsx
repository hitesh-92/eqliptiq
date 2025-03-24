import { useState, useEffect } from 'react'
import EqliptiqHeader from './components/eqliptiq'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [quizSelected, setQuizSelected] = useState(false)
  const [quizData, setQuizData] = useState({})

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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>     

      
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

        // setQuizSelected:true
        // put up loader
        // getQuiz
        // setQuizData
        //Enter Quiz

       }} ></button>
    </div>
  })
 

}

function getQuizData(isCustom){

}

export default App
