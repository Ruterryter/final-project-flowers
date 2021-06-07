import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const CardWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-flow: column wrap;
  }
`;

const ImgCard = styled.div`
  margin: 0;
  width: 50%;
  height: 500px;
  background-color: grey;
  background-image: url('https://dl.dropboxusercontent.com/s/70x6q4wfmhe9qp2/burkinsta.jpg?dl=0');
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

const Title = styled.h2`
  margin: 20px auto 0 auto;
  font-family: 'Poppins';
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #4d4d4d;
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
  }
`;

const StyledLink = styled(Link)`
  margin: auto;
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: 700;
  color: #4d4d4d;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: orange;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const About = () => {
  window.dataLayer.push({
    dataLayer: {
      event: 'pageview',
      pagePath: '/about',
      page_title: 'om oss',
    },
  });
  return (
    <>
      <CardWrapper>
        <ImgCard aria-label='flower image' alt='flowers'></ImgCard>
        <TextCard>
          <Title>Vi gillar </Title>
          <MidTitle>Blommor, smultron och hallonsaft!</MidTitle>
          <InfoText>
            ... och tycker att alla ska njuta av vackra blommor i säsong direkt
            hem till sin dörr. Våra florister älskar att skapa vackra och
            kreativa buketter med det där lilla extra Vi binder alla typer av
            buketter och arrangemang såväl till hemmet, som till den stora
            konferensen och självklart till både bröllop och begravningar. Hör
            av er till oss så hjälper vi dig med dina blommande önskemål!.
          </InfoText>

          <StyledLink aria-label='contact link' to={'/contact'}>
            Kontakta oss!
          </StyledLink>
        </TextCard>
      </CardWrapper>
    </>
  );
};
