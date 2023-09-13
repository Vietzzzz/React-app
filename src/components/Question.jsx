import React from "react";

const Question = () => {
  return (
    <div className="questions-container">
      <h1>
        To receive more exclusive offers <br></br>
        Sign up now.
      </h1>
      <div className="question-box">
        <input type="text" placeholder="Youremail@gmail.com"></input>
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Question;
