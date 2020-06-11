import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Menu = styled.ul`
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 700;
  color: #ff7c98;
  text-transform: uppercase;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: orange;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      text-align: left;
      color: #fff;
    }
  }
`;

export const RightNav = ({ open }) => {
  return (
    <Menu open={open}>
      <Link to={"/"} style={{ textDecoration: "none", color: "#FF7C98" }} >
        <li>Hem</li>
      </Link>
      <Link to={"/about/"} style={{ textDecoration: "none", color: "#FF7C98" }} >
        <li>Om oss</li>
      </Link>
      <Link to={"/contact/"} style={{ textDecoration: "none", color: "#FF7C98" }} >
        <li>Kontakta oss</li>
      </Link>
    </Menu>
  );
};
