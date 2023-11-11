// src/components/Footer/Footer.jsx
import { useTypewriter } from "react-simple-typewriter";
import React, { useState, useEffect } from "react";
import "./Footer.css";

function Footer() {
  // URLS of the Social Media Accounts
  const instagramUrl = "https://www.instagram.com/blockchain_rcoem_chapter/";
  const youtubeUrl = "https://www.youtube.com/@BlockchainRCOEM";
  const githubUrl = "https://github.com/Blockchain-RCOEM-Chapter";
  const linkedinUrl =
    "https://www.linkedin.com/company/blockchain-rcoem-chapter/mycompany/";
  const twitterUrl = "https://twitter.com/blockchainrcoem";
  const discordUrl = "https://discord.com/invite/UJKENvAGBr";
  const email = "blockchainrcoem@gmail.com";

  // URLS of Google Drive Uploaded Images used in Devloped By Section
  // Reason For using google drive Images to Save Space and Its Difficult to make dynamic Carousel in React
  const carouselImages = [
    "https://drive.google.com/uc?id=1BNApCoqrQ6LTX2f9A7HoFb9tujM8_7Sf",
    "https://drive.google.com/uc?id=1BPJaoz8yWnmI_fqclg7H--GR8Wbhzm9j",
    "https://drive.google.com/uc?id=1BhgqeyFL2roaDI_7-i_riyaehCw0fNbY",
    "https://drive.google.com/uc?id=1Bd_kc3G3bqgqw9_3wlMeLnPzQUiM22bW",
    "https://drive.google.com/uc?id=1BZ9f61Etz1YgjepOn5Mj2URyH33dpaZf",
    "https://drive.google.com/uc?id=1BQA3NwkOy5lGoTFVrS5SkFBHbS9t6VHT",
    "https://drive.google.com/uc?id=1BjTpKjt9-rdeBCmax_VTcmb8DKcucr5C",
    "https://drive.google.com/uc?id=1BNApCoqrQ6LTX2f9A7HoFb9tujM8_7Sf",
  ];

  //  Devloped By Carousel Logic
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const interval = setInterval(
      () => {
        setCounter((prevCounter) => (prevCounter + 1) % carouselImages.length);
      },
      counter === 0 ? 0 : 2000
    );
    return () => clearInterval(interval);
  }, [counter, carouselImages.length]);

  const generatedivs = () => {
    return carouselImages.map((link, index) => (
      <div
        key={index}
        style={
          counter === 0
            ? {
                background: `url('${link}')`,
                transform: `translateX(${-1 * counter * 100}%)`,
              }
            : {
                background: `url('${link}')`,
                transform: `translateX(${-1 * counter * 100}%)`,
                transition: "transform 1s ease",
              }
        }
      ></div>
    ));
  };

  // Devloped By Section in Mobile Screen View Logic
  const [typeEffect] = useTypewriter({
    words: [
      "Devloper 1",
      "Devloper 2",
      "Devloper 3",
      "Devloper 4",
      "Devloper 5",
    ],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 40,
  });

  return (
    <footer>
      {/* Container Containing All social media links */}
      <div className="social-media">
        <p>Join Us</p>
        <div className="social-media-links">
          <a
            className="linkOfSocialMedia"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className="linkOfSocialMedia"
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            className="linkOfSocialMedia"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="linkOfSocialMedia"
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="linkOfSocialMedia"
            href={twitterUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            className="linkOfSocialMedia"
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>
      </div>

      {/* Container for Devloped By names in Phone Screen Size */}
      <div className="phonesized-devlopedby">
        <p>Devloped By </p>
        <span> {typeEffect}</span>
      </div>

      {/* Container Containing Disclosers  */}
      <div className="rights">
        <div>
          <span id="footer-contactus">Contact Us</span>
          <span>{email}</span>
        </div>
        <div className="right-reserved">
          <span id="strongcommunity"># Strong-Community</span>
          <span>
            &copy; All rights reserved by{" "}
            <span id="footer-brc">BlockChain RCOEM Chapter</span>
          </span>
        </div>
      </div>
      {/* Container Containing ShoutOut to developers */}

      <div className="developedby">
        <p>Developed By</p>
        <div className="developers-carousel">{generatedivs()}</div>
      </div>
    </footer>
  );
}

export default Footer;
