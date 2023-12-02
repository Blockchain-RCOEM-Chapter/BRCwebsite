import React, { useState } from "react";
import "./Team.css";
import Data from "./Data.json";
import Card from "./Card";
function Team() {
  const [domain, setdomain] = useState("techTeamMembers");
  const generatePresidents = () => {
    return Data["presidents"].map((member, index) => <Card data={member} />);
  };
  const generateCard = () => {
    return Data[domain].map((member, index) => <Card data={member} />);
  };

  return (
    <div className="Team">
      <h1 className="teamheading">
        Meet Our<span id="font"> Team</span>
      </h1>
      <div className="presidents">{generatePresidents()}</div>

      <div className="team-nav">
        <div
          onClick={() => {
            setdomain("socialMember");
          }}
          style={
            domain === "socialMember" ? { backgroundColor: "#68626167" } : {}
          }
        >
          Social Team
        </div>

        <div
          onClick={() => {
            setdomain("eventsMembers");
          }}
          style={
            domain === "eventsMembers" ? { backgroundColor: "#68626167" } : {}
          }
        >
          Events Team
        </div>

        <div
          onClick={() => {
            setdomain("graphicsMember");
          }}
          style={
            domain === "graphicsMember" ? { backgroundColor: "#68626167" } : {}
          }
        >
          Graphics Team
        </div>
        <div
          onClick={() => {
            setdomain("techTeamMembers");
          }}
          style={
            domain === "techTeamMembers" ? { backgroundColor: "#68626167" } : {}
          }
        >
          Technical Team
        </div>
        <div
          onClick={() => {
            setdomain("marketingMember");
          }}
          style={
            domain === "marketingMember" ? { backgroundColor: "#68626167" } : {}
          }
        >
          Marketing Team
        </div>

        <div
          onClick={() => {
            setdomain("contentTeam");
          }}
          style={
            domain === "contentTeam" ? { backgroundColor: "#68626167" } : {}
          }
        >
          Content Team
        </div>
      </div>

      <div className="team-members-name">{generateCard()}</div>
    </div>
  );
}

export default Team;
