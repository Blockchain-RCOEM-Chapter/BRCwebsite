import React, { useState } from "react";
import "./Team.css";
import Data from "./data.json";
import TechLogo from "./Images/technical.png";
import SocialLogo from "./Images/social.png";
import EventLogo from "./Images/event.png";
import GraphicsLogo from "./Images/design.png";
import MarketLogo from "./Images/marketing.png";
import ContentLogo from "./Images/content.png";
import insta from "./Images/1.jpeg";
import VideoLogo from "./Images/pr.png";
import linked from "./Images/3.png";

function Team() {
  const [domain, setdomain] = useState("techTeamMembers");
  const generatePresidents = () => {
    return Data["presidents"].map((member, index) => (
      <div
        className="one-member"
        style={member["role"] == "Lead" ? { margin: "10px 40%" } : {}}
      >
        <img src={member["photoUrl"]} alt="image" />
        <br></br>
        <h3 style={{ fontFamily: "cursive", fontSize: "22px" }}>
          {member["name"]}
        </h3>
        <p style={{ fontSize: 20 }}>
          {member["role"]}
          <p style={{ fontSize: 15 }}> {member["branch"]}</p>
        </p>

        <div className="one-member-social-media">
          <img src={insta}></img> &nbsp;&nbsp;&nbsp;
          <img src={linked}></img>
        </div>
      </div>
    ));
  };
  const generateCard = () => {
    return Data[domain].map((member, index) => (
      <div
        className="one-member"
        style={member["role"] == "Lead" ? { margin: "10px 40%" } : {}}
      >
        <img src={member["photoUrl"]} alt="image" />
        <br></br>
        <h3 style={{ fontFamily: "cursive", fontSize: "22px" }}>
          {member["name"]}
        </h3>
        <p style={{ fontSize: 20 }}>
          {member["role"]}
          <p style={{ fontSize: 15 }}> {member["branch"]}</p>
        </p>

        <div className="one-member-social-media">
          <img src={insta}></img> &nbsp;&nbsp;&nbsp;
          <img src={linked}></img>
        </div>
      </div>
    ));
  };

  return (
    <div className="Team">
      <h1 className="heading">
        Meet Our<span id="font"> Team</span>
      </h1>
      <div className="presidents">{generatePresidents()}</div>
      <br></br>
      <br></br>
      <div className="team-nav">
        <div
          id="tech"
          onClick={() => {
            setdomain("techTeamMembers");
          }}
        >
          <img src={TechLogo} alt="" className="logo" />
          <br></br>
          <div className="fontstyle">Technical Team</div>
        </div>

        <div
          id="social"
          onClick={() => {
            setdomain("socialMember");
          }}
        >
          <img src={SocialLogo} alt="" className="logo" />
          <br></br>
          <div className="fontstyle">Social Team</div>
        </div>

        <div
          id="events"
          onClick={() => {
            setdomain("eventsMembers");
          }}
        >
          <img src={EventLogo} alt="" className="logo" />
          <br></br>
          <div className="fontstyle">Events Team</div>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div
          id="graphics"
          onClick={() => {
            setdomain("graphicsMember");
          }}
        >
          <img src={GraphicsLogo} alt="" className="logo" />
          <br></br>
          <div className="fontstyle">Graphics Team</div>
        </div>

        <div
          id="marketing"
          onClick={() => {
            setdomain("marketingMember");
          }}
        >
          <img src={MarketLogo} alt="" className="logo" />
          <br></br>
          <div className="fontstyle">Marketing Team</div>
        </div>

        <div
          id="content"
          onClick={() => {
            setdomain("contentTeam");
          }}
        >
          <img src={ContentLogo} alt="" className="logo" />
          <br></br>
          <div className="fontstyle">Content Team</div>
        </div>

        <div
          id="video"
          onClick={() => {
            setdomain("videoEditingMembers");
          }}
        >
          <img src={VideoLogo} alt="" className="logo" />
          <br></br>
          <div className="fontstyle">Video Editing</div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="team-members-name">{generateCard()}</div>
    </div>
  );
}

export default Team;
