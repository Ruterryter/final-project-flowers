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

const StyledLink = styled(Link)`
  margin-right: 10px;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 700;
  color: #fde7ea;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;

    &:hover {
        text-decoration: none;
        color: orange;
    }
`;

export const Footer = () => {
  return (
    <FooterDiv>
      <Link to={'/'} style={{ textDecoration: "none" }}>
        <Title>Friday flowers</Title>
      </Link>
      <div>
        <StyledLink to={"/about/"}>Om oss</StyledLink>
        <StyledLink to={"/contact/"}>Kontakta oss</StyledLink>
        <StyledLink to={"/login/"}>Admin login</StyledLink>
      </div>
    </FooterDiv >
  );
};
