import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom"
import { Burger } from "./Burger";

const Nav = styled.div`
  padding: 0 20px;
  background-color: #fde7ea;
  width: 100%;
  height: 100px;
  font-family: "Poppins";
  font-size: 42px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #ff7c98;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Poppins";
  font-size: 42px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #ff7c98;

  @media (max-width: 840px) {
    font-size: 32px;
  }
`;

export const NavBar = () => {
  return (
    <Nav>
      <Link to={'/'} style={{ textDecoration: "none" }}>
        <Title>Friday Flowers</Title>
      </Link>
      <Burger />
    </Nav>
  );
};
