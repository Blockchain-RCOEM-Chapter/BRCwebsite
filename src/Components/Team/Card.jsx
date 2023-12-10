import React from "react";
import styled from "styled-components";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Card = ({ data }) => {
  return (
    <CardWrapper
      style={{
        borderRadius: "1rem",
      }}
    >
      <div className="card-wrapper">
        <div className="layer"></div>
        <div className="content">
          <div
            className="details"
            style={{ fontSize: "1rem", fontWeight: "400" }}
          >
            <FormatQuoteIcon />
            {data.branch}
            <FormatQuoteIcon />
          </div>

          <div className="imageDiv">
            <img src={data.photoUrl} alt="" />
          </div>
          <div className="nameBox">
            <p className="name">{data.name}</p>
            <p className="role"> {data.role}</p>
          </div>
          <div>
            {data.linkedinid !== "#" ? (
              <a
                href={data.linkedinid}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <LinkedInIcon sx={{ fontSize: "2rem", color: "white" }} />
              </a>
            ) : (
              ""
            )}
            {data.instaid !== "#" ? (
              <a
                href={data.instaid}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <InstagramIcon sx={{ fontSize: "2rem", color: "white" }} />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
const CardWrapper = styled.div`
  width: 15rem;
  min-height: 25rem;
  border: 1px solid black;
  box-shadow: rgb(69 77 181) 8px 0px 30px, rgb(192 76 102) -8px 0px 30px;
  color: white;
  height: fit-content;
  text-align: center;
  overflow: hidden;
  position: relative;
  display: flex;
  margin: 2em;
  justify-content: center;
  background-color: #252525;
  @media screen and (max-width: 700px) {
    width: 25rem;
  }
  @media screen and (max-width: 400px) {
    width: 23rem;
  }
  @media screen and (max-width: 390px) {
    width: 22rem;
  }
  @media screen and (max-width: 380px) {
    width: 21.5rem;
  }
  .card-wrapper {
    position: relative;
    gap: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      .layer {
        top: 0;
      }
      .name,
      .role {
        color: white;
        font-size: calc(initial * 1.1);
      }
    }
  }
  .layer {
    top: calc(100% - 2px);
    left: 0;
    position: absolute;
    background: linear-gradient(#4a2996, #49083f);
    height: 100%;
    width: 100%;
    z-index: 1;
    transition: 0.45s all ease-in-out;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    padding: 2rem;
    z-index: 2;
  }
  .imageDiv {
    margin: 0 auto;
    width: 6rem;
    height: 6rem;
    border: 0.12rem solid white;
    border: 0.22rem solid white;
    border-radius: 50%;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .nameBox {
    .name {
      font-size: 1.8rem;
      color: #c56bff;
      font-weight: 500;
      transition: 0.1s;
    }
    .role {
      font-size: 1.1rem;
      color: #2876bf;
      font-weight: 400;
      transition: 0.1s;
    }
  }
`;
export default Card;
