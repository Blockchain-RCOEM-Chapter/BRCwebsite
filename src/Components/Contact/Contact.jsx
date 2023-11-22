import React from "react";
import "./Contact.css";
import CLandPage from "./CLandPage/CLandPage";
import Formpage from "./Formpage/Formpage";
function Contact() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="Contact">
      <CLandPage />

      <div>
        <h1 className="heading">
          <p className="contacttext">Contact Form</p>
        </h1>
      </div>

      <div className="image">
        <Formpage />
      </div>
    </div>
  );
}

export default Contact;
