import React from "react";
import styled from "styled-components/macro";

const BannerDiv = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px 0 0 0;
  background-color: #7db77d;
`;
const BannerText = styled.h4`
  margin-right: 20px;
  display: inline;
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: white;
`;
const BannerHashtags = styled.h4`
  margin-right: 20px;
  display: inline;
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  color: white;
`;

export const Banner = () => {
  return (
    <BannerDiv>
      <BannerText>Buketter för hemleverans i skåne </BannerText>
      <BannerHashtags>#MinBukett #Buketter</BannerHashtags>
      <BannerText>Buketter för hemleverans i skåne </BannerText>
    </BannerDiv>
  );
};
