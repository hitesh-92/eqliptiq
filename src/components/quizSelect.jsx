import React, { useState } from 'react'

const QuizButtons = ({
  setQuizRequest
}) => {

  const quizTypes = ["Fast Five", "Custom Quiz"]

  return quizTypes.map( (name, i) => ( 
    <button 
      className = "pure-button pure-button-primary"
      key = {i}
      style = {{ margin:"2em" }}
      onClick = { 
        () => setQuizRequest(data => ({
          ...data,
          type: quizTypes[i]
        })
      )}
    >{name}</button>
  ))

}


const ConfirmButton = ({
  quizRequest,
  setQuizRequest
}) => {
  return ( <>
      <br/>
      <button 
      className="pure-button button-success"
      onClick = { () => {
        setQuizRequest(data => ({
          ...data,
          confirmed: true,
          questions: data.type==="Fast Five" ? 5:5
          })
        )}
      }
      >Start {quizRequest.type}</button>
    </>
  )
}


const QuizSelectorInterface = ({ 
  quizRequest,
  setQuizRequest
}) => {
    return( 
      <div>  
    {
	    quizRequest.type === "" ? <p>Select Your Quiz</p> : <p>Now confirm...</p>
    }
    <QuizButtons
      setQuizRequest={setQuizRequest}
    />
    {
	    quizRequest.type !== "" &&
      <ConfirmButton
        quizRequest={quizRequest}
        setQuizRequest={setQuizRequest}
	    />
      }
      </div> 
    )
}

const QuizSelector = ({
  quizRequest, 
  setQuizRequest
}) => { 
  //Maybe break this into seperate compo
//ADD LOADER for UX
//useEffect > fetch quizData
//setQuizData: {startQuiz:true} ...then
//launch in playQuiz from parent
  return ( 
    <QuizSelectorInterface
        setQuizRequest={setQuizRequest}
        quizRequest={quizRequest}
    />
  );
};


export default QuizSelector
