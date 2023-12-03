import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  // To Manage State when Side Navbar is open or not
  const [isBurgerActive, setisBurgerActive] = useState(false);

  // For Side Navbar opening animation
  let counter = 0;

  //To find whether the device is Phone or not
  const isPhone = window.innerWidth < 480 ? true : false;

  return (
    <nav>
      {/* It will Conatain  logo */}
      <Link to="/" className="logo"></Link>

      {/* It will contain the BRC text  */}
      <div className="brc">
        BLOCKCHAIN <span> RCOEM CHAPTER</span>
      </div>

      {/* It will conatin Navigation elements */}
      <ul
        style={
          isPhone ? (isBurgerActive ? { right: "0px" } : { right: "-62%" }) : {}
        }
      >
        <NavLink to="/">
          <li
            onClick={() => {
              setisBurgerActive(false);
            }}
            style={
              isPhone
                ? isBurgerActive
                  ? { transform: `translateX(0%)` }
                  : { transform: `translateX(${100 * ++counter}%)` }
                : {}
            }
          >
            <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
            HOME
          </li>
        </NavLink>
        <NavLink to="/events">
          <li
            onClick={() => {
              setisBurgerActive(false);
            }}
            style={
              isPhone
                ? isBurgerActive
                  ? { transform: `translateX(0%)` }
                  : { transform: `translateX(${100 * ++counter}%)` }
                : {}
            }
          >
            <i
              className="fa-solid fa-calendar-check"
              style={{ color: "#ffffff" }}
            ></i>
            EVENTS
          </li>
        </NavLink>
        <NavLink to="/team">
          <li
            onClick={() => {
              setisBurgerActive(false);
            }}
            style={
              isPhone
                ? isBurgerActive
                  ? { transform: `translateX(0%)` }
                  : { transform: `translateX(${100 * ++counter}%)` }
                : {}
            }
          >
            <i
              className="fa-solid fa-people-group"
              style={{ color: "#ffffff" }}
            ></i>
            TEAM
          </li>
        </NavLink>
        <NavLink to="/contact">
          <li
            onClick={() => {
              setisBurgerActive(false);
            }}
            style={
              isPhone
                ? isBurgerActive
                  ? { transform: `translateX(0%)` }
                  : { transform: `translateX(${100 * ++counter}%)` }
                : {}
            }
          >
            <i
              className="fa-solid fa-address-book"
              style={{ color: "#ffffff" }}
            ></i>
            CONTACT US
          </li>
        </NavLink>
      </ul>

      {/* Burger to open Side Navbar when devive is Phone */}
      <div
        className="burger"
        onClick={() => {
          setisBurgerActive(!isBurgerActive);
        }}
      >
        <div
          className="top"
          style={
            isBurgerActive
              ? { transform: "rotate(45deg) translateY(8px)" }
              : { transform: "rotate(0deg) translateY(0%)" }
          }
        ></div>
        <div
          className="middle"
          style={
            isBurgerActive
              ? { transform: "translateX(500%)" }
              : { transform: "translateX(0%)" }
          }
        ></div>
        <div
          className="bottom"
          style={
            isBurgerActive
              ? { transform: "rotate(-45deg) translateY(-8px)" }
              : { transform: "rotate(0deg) translateY(0%)" }
          }
        ></div>
      </div>
    </nav>
  );
}

export default Navbar;
