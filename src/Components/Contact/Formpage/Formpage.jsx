import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Formpage.css";

function Formpage() {
  const form = useRef();
  const emailService = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(emailService, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Message Not Send, Retry after Sometime!!");
        console.log(error.text);
      }
    );
  };

  return (
    <div className="Form">
      <form ref={form} onSubmit={sendEmail}>
        <div className="contatusform-name">
          <label>Name</label>
          <input type="text" name="to_name" required />
        </div>
        <div className="contactusform-email">
          <label>Email</label>
          <input type="email" name="from_name" required />
        </div>
        <div className="contactform-msg">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Type something here!"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Formpage;
