import React, { useState } from "react";
import "./Formpage.css";
import emailjs from "emailjs-com";


function Formpage() {
  const [formData, setFormData] = useState({

    name: "",
    email: "",
    message: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace these values with your Email.js configuration
      const emailService = "service_dmwsyvi";
      const templateId = "template_tsnevom";
      const userId = "tPtCvk0eYyLAUrNQT";
  
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };
  
      await emailjs.send(emailService, templateId, templateParams, userId);
  
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
    // You can handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <div className="contatusform-name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contactusform-email">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contactform-msg">
          <label htmlFor="message">Message:</label>
          <textarea
            placeholder="Type something here!"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
   
  );
}

export default Formpage;


