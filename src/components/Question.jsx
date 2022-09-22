import "./question.scss"
import { Questions } from "./data";
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Question({score,setScore}) {
  const [ans,setAns]=useState("");
 
  const handleRadio=(e,answer)=>{
    e.preventDefault();
    setAns(e.target.value)
    console.log(e.target.value);
    if(answer==e.target.value){
     setScore(score+1)
    }
    console.log(score)

  }
  return (<div className="question">
<h1>Quiz</h1>
  
  {Questions.map((q,index)=>{
    return <div key={index} className="eachquestion" onChange={(e)=>{handleRadio(e,q.answer)}}>
    {q.question}
    <div className="options">
      {q.options.map((option,index)=>{
        return  <p key={index}><input type="radio"  name={q['S.No']} value={option} />{option}</p>
      })}  
    </div>
   
  </div>

  })}
  <Link className="btn" to ="/result">Submit</Link>
  </div>)
 
}

export default Question;
