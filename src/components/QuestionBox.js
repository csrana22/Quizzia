import React, {useState} from "react";

function QuestionBox(props) {
  const [ans, setAns] = useState(props.options);
  return (
    <div className="questionBox">
      <div className="question">{props.question}</div>
      {ans.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAns([text]);
            props.selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
