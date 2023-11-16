import React, { useState, useEffect, useRef } from "react";
import "./Domain.css";

function Domain() {
  const [isDomainVisible, setisDomainVisible] = useState();
  const Domain = useRef();

  useEffect(() => {
    const DomainObserver = new IntersectionObserver(([entry]) => {
      setisDomainVisible(entry.isIntersecting);
    });
    DomainObserver.observe(Domain.current);
  }, []);

  return (
    <div className="Home-domain" ref={Domain}>
      <div
        className="domain-section"
        style={
          isDomainVisible
            ? { transform: "scale(1)" }
            : { transform: "scale(0.7)" }
        }
      >
        <div id="tech"></div>
        <p>Technical Team</p>
      </div>
      <div
        className="domain-section"
        style={
          isDomainVisible
            ? { transform: "scale(1)" }
            : { transform: "scale(0.7)" }
        }
      >
        <div id="graphics"></div>
        <p>Graphics Team</p>
      </div>
      <div
        className="domain-section"
        style={
          isDomainVisible
            ? { transform: "scale(1)" }
            : { transform: "scale(0.7)" }
        }
      >
        <div id="social"></div>
        <p>Social Media Team</p>
      </div>
      <div
        className="domain-section"
        style={
          isDomainVisible
            ? { transform: "scale(1)" }
            : { transform: "scale(0.7)" }
        }
      >
        <div id="marketing"></div>
        <p>Marketing Team</p>
      </div>

      <div
        className="domain-section"
        style={
          isDomainVisible
            ? { transform: "scale(1)" }
            : { transform: "scale(0.7)" }
        }
      >
        <div id="event"></div>
        <p>Events Team</p>
      </div>
      <div
        className="domain-section"
        style={
          isDomainVisible
            ? { transform: "scale(1)" }
            : { transform: "scale(0.7)" }
        }
      >
        <div id="video"></div>
        <p>Video Editing Team</p>
      </div>
      <div
        className="domain-section"
        style={
          isDomainVisible
            ? { transform: "scale(1)" }
            : { transform: "scale(0.7)" }
        }
      >
        <div id="content"></div>
        <p>Content Team</p>
      </div>
    </div>
  );
}

export default Domain;
