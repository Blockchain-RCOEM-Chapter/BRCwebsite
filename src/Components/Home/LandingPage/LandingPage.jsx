import React from "react";
import "./LandingPage.css";
import logo from "../Images/brc-logo.svg";

function LandingPage() {
  return (
    <div className="LandingPage">
      <img src={logo} id="brc-logo" alt="Club Logo" />
      <div id="headlines">
        <p className="brc">
          <span>BLOCKCHAIN</span> RCOEM CHAPTER
        </p>
        <p className="rcoem">
          Shri Ramdeobaba College Of Engineering and Management
        </p>
      </div>
      <a
        href="https://www.instagram.com/blockchain_rcoem_chapter/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="join-community-btn">
          JOIN OUR COMMUNITY{" "}
          <i className="fa-solid fa-arrow-trend-up fa-lg"></i>
        </button>
      </a>
    </div>
  );
}

export default LandingPage;
