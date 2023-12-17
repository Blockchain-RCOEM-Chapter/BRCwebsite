import React, { useState, useEffect } from "react";
import "./Team.css";
import Data from "./Data.json";
import Card from "./Card";
import { Helmet } from "react-helmet-async";

function Team() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [domain, setdomain] = useState("techTeamMembers");
  const [isspinnervisible, setisspinnervisible] = useState(false);
  const generatePresidents = () => {
    return Data["presidents"].map((member, index) => (
      <Card data={member} key={index} />
    ));
  };
  const generateCard = () => {
    return Data[domain].map((member, index) => (
      <Card data={member} key={index} />
    ));
  };
  const loadSpinner = () => {
    setisspinnervisible(true);
    setTimeout(() => {
      setisspinnervisible(false);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>TEAM | BLOCKCHAIN RCOEM CHAPTER</title>
        <meta
          name="description"
          content="Meet our Blockchain RCOEM team—passionate about tech innovation, making a positive impact. Explore the minds behind the revolution!"
        />
        <meta property="og:title" content="TEAM | BLOCKCHAIN RCOEM CHAPTER" />
        <meta
          property="og:description"
          content="Meet our Blockchain RCOEM team—passionate about tech innovation, making a positive impact. Explore the minds behind the revolution!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://blockchain-rcoem-chapter.vercel.app/static/media/brc-logo.afe4cca69f17ea1bd713da3bd05654ab.svg"
        />
        <meta
          property="og:url"
          content="https://blockchain-rcoem-chapter.vercel.app/team"
        />
        <link
          rel="cononical"
          href="https://blockchain-rcoem-chapter.vercel.app/team"
        />
      </Helmet>
      <div className="Team">
        <h1 className="teamheading">
          Meet Our<span id="font"> Team</span>
        </h1>
        <div className="presidents">{generatePresidents()}</div>
        <div className="team-nav">
          <div
            onClick={() => {
              setdomain("socialMember");
              loadSpinner();
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
              loadSpinner();
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
              loadSpinner();
            }}
            style={
              domain === "graphicsMember"
                ? { backgroundColor: "#68626167" }
                : {}
            }
          >
            Graphics Team
          </div>
          <div
            onClick={() => {
              setdomain("techTeamMembers");
              loadSpinner();
            }}
            style={
              domain === "techTeamMembers"
                ? { backgroundColor: "#68626167" }
                : {}
            }
          >
            Technical Team
          </div>
          <div
            onClick={() => {
              setdomain("marketingMember");
              loadSpinner();
            }}
            style={
              domain === "marketingMember"
                ? { backgroundColor: "#68626167" }
                : {}
            }
          >
            Marketing Team
          </div>

          <div
            onClick={() => {
              setdomain("contentTeam");
              loadSpinner();
            }}
            style={
              domain === "contentTeam" ? { backgroundColor: "#68626167" } : {}
            }
          >
            Content Team
          </div>
        </div>
        {isspinnervisible && (
          <div
            className="spinner-border text-light"
            style={{ margin: "10px 0%", marginLeft: "50%" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        <div
          className="team-members-name"
          style={
            isspinnervisible
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
        >
          {generateCard()}
        </div>
      </div>
    </>
  );
}

export default Team;
