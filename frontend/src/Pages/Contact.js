import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Banner } from "components/Banner";
import mellanBank from "assets/mellanBank.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

const CardWrapper = styled.div`
  padding: 50px 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  @media (max-width: 768px) {
    height: auto;
    flex-flow: column wrap;
  }
`;

const ImgCard = styled.div`
  margin: 0;
  width: 350px;
  height: 350px;
  background-image: url(${mellanBank});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 350px;
  }
`;

const TextCard = styled.div`
  margin: 0;
  padding: 20px;
  width: 50%;
  height: 500px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    flex-flow: column nowrap;
    padding: 50px 20px;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;

    padding: 50px 20px;
  }
`;

const Title = styled.h2`
  margin: 20px auto 0 auto;
  font-family: "Poppins";
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #4d4d4d;
`;

const MidTitle = styled.h3`
  margin: 0 auto;
  margin-bottom: 20px;
  font-family: "Sacramento", cursive;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: #4d4d4d;
  line-height: 80%;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const InfoText = styled.h5`
  margin: auto 20px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #4d4d4d;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ContactLink = styled.a`
  margin: auto;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  color: #4d4d4d;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: orange;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 20px;
  }
`;

export const Contact = () => {
  return (
    <>
      <CardWrapper>
        <ImgCard aria-label="bild på blommor"></ImgCard>
        <TextCard>
          <Title>Ta kontakt</Title>
          <MidTitle>Så gör vi något fint ihop...</MidTitle>
          <InfoText aria-label="Informationstext">
            Skriv ett mail eller slå en singnal så hjälper vi dig med det
            perfekta blommorna. Våra florister älskar att skapa vackra och
            kreativa buketter med det där lilla extra.
          </InfoText>
          <ContactInfo>
            <ContactLink
              aria-label="elins mail"
              href="mailto:elinaarenstrup@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Elin Aarenstrup
            </ContactLink>

            <ContactLink
              aria-label="hannas email"
              href="mailto:hanna.ruter@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Hanna Rüter
            </ContactLink>

            <ContactLink aria-label="telefonnummer" href="tel:5551234567">
              <FontAwesomeIcon icon={faMobile} /> Ring oss
            </ContactLink>
          </ContactInfo>
        </TextCard>
      </CardWrapper>
      <Banner />
    </>
  );
};
