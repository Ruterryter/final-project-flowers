import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { EyecatcherContainer } from "../components/EyecatcherContainer";
import { HighlightCard } from "../components/HighlightCard";
import { Products } from "../components/Products";
import { allProducts } from "reducers/products";
import mediumBukett2 from "assets/mediumBukett2.jpg";
import vitaRosor from "assets/vita_rosor.jpg";
import begravning2 from "assets/begravning2.jpg";
import mellanStol from "assets/mellanStol.jpg";

const StartWrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;

const CategoryImgsWrapper = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
`;

const HlDiv = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  margin-top: 20px;
  font-family: "Poppins";
  font-size: 42px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #ff7c98;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const StartPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <StartWrapper>
      <EyecatcherContainer />
      <Products />

      <CategoryImgsWrapper>
        <Title>Special beställningar</Title>
        <HlDiv>
          <HighlightCard
            roundImg={mediumBukett2}
            title="Bröllop"
            alt="bröllopsbukett"
          />
          <HighlightCard
            roundImg={begravning2}
            title="Begravning"
            alt="begravningsarrangemang"
          />
          <HighlightCard roundImg={vitaRosor} title="Fest" alt="festblommor" />
          <HighlightCard
            roundImg={mellanStol}
            title="Konferens"
            alt="konferensbukett"
          />
        </HlDiv>
      </CategoryImgsWrapper>
    </StartWrapper>
  );
};
