import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterDiv = styled.div`
  margin: 0;
  width: 100%;
  height: 300px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  background-color: #ff7c98;
  border-top: 2px solid #fde7ea;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    position: relative;
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
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: orange;
  }
`;

const SocialMediaLink = styled.a`
  margin-right: 20px;
  font-family: "Poppins";
  font-size: 35px;
  font-weight: 700;
  color: #fde7ea;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;

const SocialMedia = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const Footer = () => {
  return (
    <FooterDiv>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Title>Friday flowers</Title>
      </Link>
      <div>
        <StyledLink to={"/"}>Hem</StyledLink>
        <StyledLink to={"/about/"}>Om oss</StyledLink>
        <StyledLink to={"/contact/"}>Kontakta oss</StyledLink>
        <SocialMedia>
          <SocialMediaLink
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </SocialMediaLink>
        </SocialMedia>
      </div>
    </FooterDiv>
  );
};
