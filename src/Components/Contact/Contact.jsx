import React from "react";
import "./Contact.css";
import CLandPage from "./CLandPage/CLandPage";
import Formpage from "./Formpage/Formpage";
import { Helmet } from "react-helmet-async";

function Contact() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Helmet>
        <title>CONTACT US | BLOCKCHAIN RBU CHAPTER</title>
        <meta
          name="description"
          content="Connect with Blockchain RBU. Have questions or ideas? Reach out—we're here to help. Let's collaborate and shape the future together!"
        />
        <meta
          property="og:title"
          content="CONATACT US | BLOCKCHAIN RBU CHAPTER"
        />
        <meta
          property="og:site_name"
          content="CONATACT US | BLOCKCHAIN RBU CHAPTER"
        />
        <meta
          property="og:description"
          content="Connect with Blockchain RBU. Have questions or ideas? Reach out—we're here to help. Let's collaborate and shape the future together!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://blockchainrcoemchapter.co.in/contact"
        />
        <link
          rel="cononical"
          href="https://blockchainrcoemchapter.co.in/contact"
        />
      </Helmet>
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
    </>
  );
}

export default Contact;
