import React from "react";

function Result(props){
return <div className="score-board">
<div className="score">
    You scored {props.score} / 5 correct answers!
</div>
<button className="playBtn" onClick={props.play}>Play Again!</button>
</div>
}

export default Result;