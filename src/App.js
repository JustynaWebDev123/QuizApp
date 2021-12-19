import React ,{useState,useEffect}from 'react'
import Header from './Header'
import Question from './Question'
import ResetGame from './ResetGame'
import axios from "axios"
import "./index.css"

function App() {

  const [questions,setQuestions]=useState([]);
  const [countQuestion, setCountQuestion]=useState(1)
  

  useEffect(()=>{
  axios
  .get("https://opentdb.com/api.php?amount=1")
  .then(res => {
   setQuestions
   (res.data.results.map((questionItem,index)=>{
   const answer =decodeString(questionItem.correct_answer)
   const options=[...questionItem.incorrect_answers.map(decodeString),answer]
      
    
    
   return{
   id:`${index}-${Date.now()}`,
   question:decodeString(questionItem.question),
   answer:answer ,
   options:options.sort(() =>Math.random() - .5)}} ))})}, [])


   function decodeString(str) {
   const textArea = document.createElement('textarea')
   textArea.innerHTML= str
   return textArea.value
    }

   
    

  return (
    <div>
    <Header/>
    
    <Question 
    questions={questions} 
    setCountQuestion={setCountQuestion} 
    countQuestion={countQuestion}
    />

    <ResetGame 
    setCountQuestion={setCountQuestion} 
    countQuestion={countQuestion}
    />
<div className='simple-footer'></div>
    </div>
  )
}

export default App
