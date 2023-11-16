import React, { useRef, useEffect, useState } from "react";
import "./AboutUs.css";
import Data from "../data.json";

function AboutUs() {
  const [isWhatBRCVisible, setisWhatBRCVisible] = useState(false);
  const whatBrc = useRef();

  const [isAboutUsRightSide, setisAboutUsRightSide] = useState(false);
  const aboutUsRightContainer = useRef(); // Use a new ref for the container

  useEffect(() => {
    const whatBrcObserver = new IntersectionObserver(([entry]) => {
      setisWhatBRCVisible(entry.isIntersecting);
    });
    whatBrcObserver.observe(whatBrc.current);

    const aboutUsRightObserver = new IntersectionObserver(([entry]) => {
      setisAboutUsRightSide(entry.isIntersecting);
    });
    aboutUsRightObserver.observe(aboutUsRightContainer.current);
  }, []);

  return (
    <div className="Home-AboutUs">
      <div
        className="what-brc"
        ref={whatBrc}
        style={
          isWhatBRCVisible
            ? { transform: "scale(1)", opacity: "1" }
            : { transform: "scale(0.9)", opacity: "0" }
        }
      >
        <h2>WHAT IS BRC? 🤔</h2>
        <p>{Data["aboutus"]["whatIsBrc"][0]}</p>
        <p>{Data["aboutus"]["whatIsBrc"][1]}</p>
      </div>
      <div
        className="Home-AboutUs-rightside"
        ref={aboutUsRightContainer}
        style={
          isAboutUsRightSide
            ? { transform: "scale(1)", opacity: "1" }
            : { transform: "scale(0.9)", opacity: "0" }
        }
      >
        <div className="ourgoals">
          <h2>OUR GOALS</h2>
          <p>{Data["aboutus"]["ourGoals"]}</p>
        </div>
        <div className="why-brc">
          <h2>WHY BRC?</h2>
          <p>{Data["aboutus"]["whyBrc"]}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
