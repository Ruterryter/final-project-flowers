import React from "react";
import styled from "styled-components/macro";

const HighlightImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: orange;
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
    <HighlightCardDiv>
      <HighlightImg />
      <MidHeader>Hej</MidHeader>
    </HighlightCardDiv>
  );
};
