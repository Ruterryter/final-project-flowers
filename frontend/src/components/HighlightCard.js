import React from "react"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"

<<<<<<< HEAD

const HighlightImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-size: contain; 
=======
const HighlightImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
>>>>>>> d7e1f3e375028ec879c49264e73b3166f4db2e80
`;
const HighlightCardDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  
  :hover{
      transform: scale(1.2);    
  }

  @media (max-width: 872px) {
    margin: 20px 0;
    width: 35vh;
  }
`;

const MidHeader = styled.h3`
  font-family: "Poppins";
  font-size: 24px;
  text-align: center;
  color: #4d4d4d;
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
text-decoration: none;
  `

<<<<<<< HEAD
export const HighlightCard = ({ title, backgroundImage }) => {
  return (
    <StyledLink to={"/contact/"}>
      <HighlightCardDiv>
        <HighlightImg> {backgroundImage}</HighlightImg>
=======
export const HighlightCard = ({ title, roundImg }) => {
  return (
    <StyledLink to={"/contact/"}>
      <HighlightCardDiv>
        <HighlightImg src={roundImg} />
>>>>>>> d7e1f3e375028ec879c49264e73b3166f4db2e80
        <MidHeader>{title}</MidHeader>
      </HighlightCardDiv>
    </StyledLink>
  );
};
