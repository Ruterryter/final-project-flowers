import React from "react";
import styled from "styled-components/macro";
import ScrollText from "react-scroll-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const BannerDiv = styled.div`
  padding-top: 8px;
  width: 100%;
  height: 50px;
  background-color: #7db77d;
`;

const BannerText = styled.h4`
  padding-right: 20px;
  display: inline;
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
`;

const BannerHashtags = styled.h4`
  padding-right: 20px;
  display: inline;
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  color: white;
`;

export const Banner = () => {
  return (
    <BannerDiv>
      <ScrollText>
        <BannerText aria-label="info banner">
          Buketter för hemleverans i skåne{" "}
        </BannerText>
        <BannerText>
          <FontAwesomeIcon icon={faInstagram} aria-label="instagramikon" />
        </BannerText>
        <BannerHashtags>#MinBukett #Buketter</BannerHashtags>
        <BannerHashtags>Buketter för hemleverans i skåne </BannerHashtags>
        <BannerText>
          OBS! Det går inte beställa riktiga buketter, men vi gör gärna en
          hemsida åt dig.
        </BannerText>
      </ScrollText>
    </BannerDiv>
  );
};
