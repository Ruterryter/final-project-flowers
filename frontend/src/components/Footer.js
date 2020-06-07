import React from "react";
import styled from "styled-components/macro";

const FooterDiv = styled.div`
  margin: 0;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #ff7c98;
`;

export const Footer = () => {
  return <FooterDiv></FooterDiv>;
};
