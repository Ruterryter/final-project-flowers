import React from "react";
import styled from "styled-components/macro";

const FooterDiv = styled.div`
  margin: 0;
  width: 100%;
  height: 300px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  background-color: #ff7c98;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-family: "Poppins";
  font-size: 42px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fde7ea;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Link = styled.a`
  margin-right: 10px;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fde7ea;

  :hover {
    color: orange;
  }
`;

export const Footer = () => {
  return (
    <FooterDiv>
      <Title>Friday flowers</Title>
      <div>
        <Link>About Us</Link>
        <Link>Contact Us</Link>
        <Link>Log In</Link>
      </div>
    </FooterDiv>
  );
};
