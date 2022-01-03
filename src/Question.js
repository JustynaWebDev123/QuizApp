import React,{useState,useEffect}from 'react';
import Help from './Help';



function Question({questions,setCountQuestion, countQuestion}) { 

const [isClick, setIsClick] = useState([]);


function nextQuestion(){
if(window.location.reload(false))
return
(setCountQuestion (countQuestion + 1 ))

}

useEffect(() => {
  setCountQuestion(JSON.parse(window.localStorage.getItem('countQuestion')));
}, [setCountQuestion]);

useEffect(() => {
  window.localStorage.setItem('countQuestion', countQuestion);
}, [countQuestion]);


const handleOption = () => {
if (isClick[countQuestion - 1]) return;
let newdata = [...isClick];
newdata[countQuestion - 1] = true;
setIsClick(newdata);
};


return (
    
<div className="question-container">

<div>
{questions.map((questions) => (
<div>
<div className="question-display" key={questions.id}>
<h2 > {countQuestion}. {questions.question}</h2>
</div>
            
<div className="options-display">
{questions.options.map((options) => {
return (
<button className={`btn-option ${
isClick[countQuestion - 1] ? options === questions.answer ? "correct" : "incorrect" :"" }`}
key={options}
onClick={handleOption}>{options}</button>);})}
</div>



<div className="btn-next-container">
<button onClick={nextQuestion}>Next Question </button>
</div>


<div>

<Help answer={questions.answer} />
<div/>

</div>
</div>

          
))}
</div></div>
  );}

export default Question;

