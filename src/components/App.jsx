import React ,{useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Qbank from "./Qbank";
import QuestionBox from "./QuestionBox";
import Result from "./Result";


function App(){
const [ques,setQues]=useState([]);
const [score,setScore]=useState(0);
const [resp,setResp]=useState(0);

function check(ans,correct){
if(ans===correct){
setScore(score+1);
}
setResp(resp+1);
}

function playAgain(){
    getQues();
    setScore(0);
    setResp(0);
}

function getQues(){
    
    setQues(Qbank);
}
useEffect(()=>{
    if(ques.length===0){
    getQues();}
});
    return <div className="container">
<div className="title">
    Quizzia
    </div>
    {ques.length > 0 && resp<5 && ques.map((que)=>{
      return <QuestionBox question={que.question} options={que.answers} selected={(answer)=>{check(answer,que.correct)}}/>
    })}
    {resp===5 ? <Result score={score} play={playAgain}  />: null}
    </div>
}
export default App;