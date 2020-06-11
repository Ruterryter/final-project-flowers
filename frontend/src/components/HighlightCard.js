import React from "react"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import mediumBukett2 from "assets/mediumBukett2.jpg"


const HighlightImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${mediumBukett2});
  background-size: contain; 
`;
const HighlightCardDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

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

export const HighlightCard = () => {
  return (
    <Link to={"/contact/"} style={{
      marginRight: "10px",
      fontFamily: "Poppins",
      fontSize: "18px",
      fontWeight: "700",
      textTransform: "uppercase",
      textAlign: "center",
      color: "#fde7ea",
      textDecoration: "none"
    }}>
      <HighlightCardDiv>
        <HighlightImg />
        <MidHeader>Bröllop</MidHeader>
      </HighlightCardDiv>
    </Link>
  );
};
