import React from "react";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { NavBar } from "../components/Navbar";
import { EyecatcherContainer } from "../components/EyecatcherContainer";
import { HighlightCard } from "../components/HighlightCard";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Products } from "../components/Products";
import { allProducts } from "reducers/products";
import { useEffect } from "react";
import mediumBukett2 from "assets/mediumBukett2.jpg"


const AppWrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;

const CategoryImgsWrapper = styled.div`
  padding: 100px 20px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
`;

export const StartPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <AppWrapper>
      <NavBar />
      <EyecatcherContainer />
      <Products />
      <CategoryImgsWrapper>
        <HighlightCard title="Bröllop" imgURL={mediumBukett2} />
        <HighlightCard title="Begravning" />
        <HighlightCard title="Fest" />
        <HighlightCard title="Konferens" />
      </CategoryImgsWrapper>
      <Banner />
      <Footer />
    </AppWrapper>
  );
};
