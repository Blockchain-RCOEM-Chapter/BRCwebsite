import React from "react";
import "./CLandPage.css";

function CLandPage() {
  return (
    <div className="LandPage">
      <div className="info">
        <p>Got A Question?</p>
        <h1>
          Contact <span style={{ color: "#7DDEE4" }}>BRC</span> !!
        </h1>
      </div>

      <div className="home-vector">
        <p>“We welcome your feedback, </p>
        <p>Don't hesitate to get in touch</p>
        <p>with any questions or comments </p>
        <p> through the contact form below.</p>
        <p> We look forward to hearing from </p>
        <p>you!"</p>
      </div>
      <div className="home-side-img"></div>
    </div>
  );
}
export default CLandPage;
