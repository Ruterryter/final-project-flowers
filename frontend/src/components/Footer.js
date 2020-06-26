import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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

const InfoDiv = styled.div`
  margin-bottom: 10px;
  width: 50%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
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

const InfoText = styled.h5`
  margin: auto 20px;
  font-family: "Poppins";
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 10px;
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

const ContactLink = styled.a`
  padding-left: 20px;
  font-family: "Poppins";
  font-size: 10px;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: orange;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 20px;
  }
`;

export const Footer = () => {
  return (
    <FooterDiv>
      <InfoDiv>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Title>Friday flowers</Title>
        </Link>
        <InfoText>
          Slutprojekt Technigo bootcamp av Elin Aarenstrup & Hanna Rüter, Juni
          2020
        </InfoText>
        <span>
          <ContactLink
            aria-label="elins mail"
            href="mailto:elinaarenstrup@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Elin
          </ContactLink>
          <ContactLink
            aria-label="hannas email"
            href="mailto:hanna.ruter@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Hanna
          </ContactLink>
        </span>
      </InfoDiv>
      <div>
        <StyledLink aria-label="länk till startsidan" to={"/"}>
          Hem
        </StyledLink>
        <StyledLink aria-label="länk till om oss" to={"/about/"}>
          Om oss
        </StyledLink>
        <StyledLink aria-label="länk till kontakt" to={"/contact/"}>
          Kontakta oss
        </StyledLink>
        <SocialMedia aria-label="länk till sociala medier">
          <SocialMediaLink
            aria-label="länk till instagram"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} aria-label="instagramikon" />
          </SocialMediaLink>
          <SocialMediaLink
            aria-label="länk till facebook"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} aria-label="facebookikon" />
          </SocialMediaLink>
          <SocialMediaLink
            aria-label="länk till twitter"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} aria-label="twitterikon" />
          </SocialMediaLink>
        </SocialMedia>
      </div>
    </FooterDiv>
  );
};
