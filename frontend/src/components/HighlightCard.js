import React from "react"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"

const HighlightImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
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

export const HighlightCard = ({ title, roundImg }) => {
  return (
    <StyledLink to={"/contact/"}>
      <HighlightCardDiv>
        <HighlightImg src={roundImg} />
        <MidHeader>{title}</MidHeader>
      </HighlightCardDiv>
    </StyledLink>
  );
};
