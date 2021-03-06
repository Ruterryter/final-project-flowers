import React from 'react';
import styled from 'styled-components/macro';
import mellanBank from 'assets/mellanBank.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const CardWrapper = styled.div`
  width: 100%;
  height: auto;
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
  width: 50%;
  height: 500px;
  background-image: url(${mellanBank});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
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
  font-family: 'Poppins';
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #4d4d4d;
`;

const MidTitle = styled.h3`
  margin: 0 auto;
  margin-bottom: 20px;
  font-family: 'Sacramento', cursive;
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
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #4d4d4d;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ContactLink = styled.a`
  padding-left: 20px;
  font-family: 'Poppins';
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
  window.dataLayer.push({
    dataLayer: {
      event: 'pageview',
      pagePath: '/contact',
      page_title: 'kontakt',
    },
  });
  return (
    <>
      <CardWrapper>
        <ImgCard aria-label='bild på blommor'></ImgCard>
        <TextCard>
          <Title>Ta kontakt</Title>
          <MidTitle>Så gör vi något fint ihop...</MidTitle>
          <InfoText aria-label='Informationstext'>
            Skriv ett mail eller slå en signal så hjälper vi dig med de perfekta
            blommorna. Våra florister älskar att skapa vackra och kreativa
            buketter med det där lilla extra.
          </InfoText>
          <ContactInfo>
            <ContactLink
              aria-label='elins mail'
              href='mailto:elinaarenstrup@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 10 }} />
              Elin Aarenstrup
            </ContactLink>
            <ContactLink
              aria-label='hannas email'
              href='mailto:hanna.ruter@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 10 }} />
              Hanna Rüter
            </ContactLink>
          </ContactInfo>
        </TextCard>
      </CardWrapper>
    </>
  );
};
