import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { NavBar } from "components/Navbar";
import { Footer } from "components/Footer";
import { Banner } from "components/Banner";
import mellanBank from "assets/mellanBank.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

const CardWrapper = styled.div`
  padding: 100px 0;
  width: 100%;
  height: 100%;
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
  width: 40vh;
  height: 40vh;
  background-image: url(${mellanBank});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media (max-width: 768px) {
    width: 100%;
    height: 350px;
  }
`;

const TextCard = styled.div`
  margin: 0;
  padding: 20px;
  width: 50%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
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
  width: 100px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: auto;
  font-family: "Poppins";
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #4d4d4d;
`;

const MidTitle = styled.h3`
  margin: auto;
  margin-bottom: 20px;
  font-family: "Sacramento", cursive;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: #4d4d4d;
  line-height: 80%;

  @media (max-width: 768px) {
    font-size: 24px;
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

const StyledLink = styled(Link)`
  margin: auto;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 700;
  color: #4d4d4d;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: orange;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 20px;
  }
`;

const ContactLink = styled.a`
  margin: auto;
  font-family: "Poppins";
  font-size: 32px;
  font-weight: 400;
  color: #4d4d4d;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: orange;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 20px;
  }
`;

export const Contact = () => {
  return (
    <>
      <NavBar />
      <CardWrapper>
        <ImgCard></ImgCard>
        <TextCard>
          <Title>Ta kontakt</Title>
          <MidTitle>Så gör vi något fint ihop...</MidTitle>
          <InfoText>
            Skriv ett mail eller slå en singnal så hjälper vi dig med det
            perfekta blommorna. Våra florister älskar att skapa vackra och
            kreativa buketter med det där lilla extra Vi binder alla typer av
            buketter och arrangemang såväl till hemmet, som till den stora
            konferensen och självklart till både bröllop och begravningar. Hör
            av er till oss så hjälper vi dig med dina blommande önskemål!.
          </InfoText>
          <ContactInfo>
            <ContactLink
              href="mailto:elinaarenstrup@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </ContactLink>
            <ContactLink href="tel:5551234567">
              <FontAwesomeIcon icon={faMobile} />
            </ContactLink>
          </ContactInfo>
          <StyledLink className="back-link" to={"/"}>
            Tillbaks
          </StyledLink>
        </TextCard>
      </CardWrapper>
      <Banner />
      <Footer />
    </>
  );
};
