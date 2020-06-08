import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom"

const FooterDiv = styled.div`
  margin: 0;
  width: 100%;
  height: 300px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  background-color: #ff7c98;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-family: "Poppins";
  font-size: 42px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fde7ea;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Footer = () => {
  return (
    <FooterDiv>
      <Title>Friday flowers</Title>
      <div>
        <Link className="aboutlink" to={"/about/"} style={{
          marginRight: "10px",
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: "700",
          textTransform: "uppercase",
          textAlign: "center",
          color: "#fde7ea",
          textDecoration: "none"
        }}
        // lägg till hover orange
        >About Us</Link>
        <Link to={"/contact/"} style={{
          marginRight: "10px",
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: "700",
          textTransform: "uppercase",
          textAlign: "center",
          color: "#fde7ea",
          textDecoration: "none"
        }}>Contact Us</Link>

        <Link to={"/login/"}
          style={{
            marginRight: "10px",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: "700",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#fde7ea",
            textDecoration: "none"
          }}>Log In</Link>
      </div>
    </FooterDiv>
  );
};
