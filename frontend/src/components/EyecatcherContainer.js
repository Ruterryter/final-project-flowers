import React from "react";
import styled from "styled-components/macro";
import eyecatcherPic from "../assets/mellanBank2.jpg";

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-flow: column wrap;
  }
`;

const ImgCard = styled.div`
  margin: 0;
  width: 50%;
  height: 500px;
  background-color: grey;
  background-image: url(${eyecatcherPic});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: pink;
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
  background-color: pink;
  display: flex;
  flex-flow: column wrap;
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
  margin: 100px 0 0 0;
  font-family: "Poppins";
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    margin: auto;
  }
`;

const MidTitle = styled.h3`
  margin: 0 0 50px 0;
  font-family: "Sacramento", cursive;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: #4d4d4d;
  line-height: 80%;

  @media (max-width: 768px) {
    margin: auto;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const InfoText = styled.h5`
  margin: 20px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    margin: auto 20px;
    font-size: 14px;
  }
`;

export const EyecatcherContainer = () => {
  return (
    <CardWrapper>
      <ImgCard></ImgCard>
      <TextCard>
        <Title>En bukett till helgen?!</Title>
        <MidTitle>Leverans varje fredag direkt till din dörr..</MidTitle>
        <InfoText>
          Välj bara storleken på buketten så fixar vi resten. Alltid färska
          fräscha blommor i säsong och så närodlade som möjligt. Låt ditt hem
          blomstra!
        </InfoText>
      </TextCard>
    </CardWrapper>
  );
};
