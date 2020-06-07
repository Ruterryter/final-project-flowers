import React from "react";
import styled from "styled-components/macro";

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

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const TextCard = styled.div`
  margin: 0;
  width: 50%;
  height: 500px;
  background-color: #ff7c98;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

export const EyecatcherContainer = () => {
  return (
    <CardWrapper>
      <ImgCard></ImgCard>
      <TextCard></TextCard>
    </CardWrapper>
  );
};
