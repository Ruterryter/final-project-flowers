import React from "react";
import styled from "styled-components/macro";
import headerPic from "../assets/Headerpic.jpeg";

const BackgroundImg = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${headerPic});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: pink;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const HeaderImg = () => {
  return <BackgroundImg></BackgroundImg>;
};
