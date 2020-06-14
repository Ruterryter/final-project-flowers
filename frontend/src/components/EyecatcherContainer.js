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
    height: 350px;
  }
`;

const TextCard = styled.div`
  margin: 0;
  width: 50%;
  height: 500px;
  background-color: #ff7c98;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const Title = styled.h2`
  margin: auto;
  font-family: "Poppins";
  font-size: 42px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fde7ea;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const InfoText = styled.h5`
  margin: auto 30px;
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: #fde7ea;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const EyecatcherContainer = () => {
  return (
    <CardWrapper>
      <ImgCard></ImgCard>
      <TextCard>
        <Title>En bukett till helgen?!</Title>
        <InfoText>Vi leverar vackra blombuketter varje fredag direkt till din dörr.
        Välj bara storleken på buketten så fixar vi resten. Alltid färska fräscha blommor i säsong och så närodlade så möjligt.
        </InfoText>
      </TextCard>
    </CardWrapper>
  );
};