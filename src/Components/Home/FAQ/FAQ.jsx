import React from "react";
import "./FAQ.css";
import Data from "../data.json";
function FAQ() {
  return (
    <div className="FAQ">
      <div className="questions-container">
        <div id="question1">
          <h2>{Data["faq"]["question1"][0]}</h2>
          <p>{Data["faq"]["question1"][1]}</p>
        </div>
        <div id="question2">
          <h2>{Data["faq"]["question2"][0]}</h2>
          <p>{Data["faq"]["question2"][1]}</p>
        </div>
        <div id="question3">
          <h2>{Data["faq"]["question3"][0]}</h2>
          <p>{Data["faq"]["question3"][1]}</p>
        </div>
        <div id="question4">
          <h2>{Data["faq"]["question4"][0]}</h2>
          <p>{Data["faq"]["question4"][1]}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
