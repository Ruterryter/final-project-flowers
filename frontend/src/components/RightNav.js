import React from "react";
import styled from "styled-components";

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
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Login</li>
    </Menu>
  );
};
