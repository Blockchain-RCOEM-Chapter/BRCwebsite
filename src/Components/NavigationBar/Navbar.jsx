import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [isBurgerActive, setisBurgerActive] = useState(
    window.innerWidth > 500 ? true : false
  );
  const toggleHamberger = () => {
    if (isBurgerActive) {
      setisBurgerActive(false);
    } else {
      setisBurgerActive(true);
    }
  };
  return (
    <nav>
      <div className="logo"></div>
      <div className="right-side">
        <ul style={isBurgerActive ? { right: "0" } : { right: "-52%" }}>
          <li className="nav-element">
            <i
              className="fa-solid fa-address-book"
              style={{ color: "#ffffff" }}
            ></i>
            CONTACT US
          </li>
          <li className="nav-element">
            <i
              className="fa-solid fa-people-group"
              style={{ color: "#ffffff" }}
            ></i>
            TEAM
          </li>
          <li className="nav-element">
            <i
              className="fa-solid fa-calendar-check"
              style={{ color: "#ffffff" }}
            ></i>
            EVENTS
          </li>
          <li className="nav-element">
            <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
            HOME
          </li>
        </ul>

        <div className="tagline">BRC RCOEM | COMMUNITY OF HUSTLERS!</div>
      </div>
      <div className="burger" onClick={toggleHamberger}>
        <div
          className="top"
          style={
            isBurgerActive
              ? { transform: "rotate(45deg) translateY(700%)" }
              : {}
          }
        ></div>
        <div
          className="middle"
          style={
            isBurgerActive
              ? {
                  transform: "rotate(45deg) translateX(1000%)",
                }
              : {}
          }
        ></div>
        <div
          className="bottom"
          style={
            isBurgerActive
              ? { transform: "rotate(-45deg) translateY(-700%)" }
              : {}
          }
        ></div>
      </div>
    </nav>
  );
}

export default Navbar;
