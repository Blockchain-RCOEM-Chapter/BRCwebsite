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
        <title>CONATACT US | BLOCKCHAIN RCOEM CHAPTER</title>
        <meta
          name="description"
          content="Connect with Blockchain RCOEM. Have questions or ideas? Reach out—we're here to help. Let's collaborate and shape the future together!"
        />
        <meta
          property="og:title"
          content="CONATACT US | BLOCKCHAIN RCOEM CHAPTER"
        />
        <meta
          property="og:description"
          content="Connect with Blockchain RCOEM. Have questions or ideas? Reach out—we're here to help. Let's collaborate and shape the future together!"
        />
        <meta property="og:image" content="../Home/Images/brc-logo.svg" />
        <meta
          property="og:url"
          content="https://blockchain-rcoem-chapter.vercel.app/contact"
        />
        <link rel="cononical" href="/contact" />
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
