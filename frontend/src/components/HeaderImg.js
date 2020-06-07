import React from "react";
import styled from "styled-components/macro";

const BackgroundImg = styled.div`
  width: 100%;
  height: 500px;
  background-color: pink;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const HeaderImg = () => {
  return <BackgroundImg></BackgroundImg>;
};
