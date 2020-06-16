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
<<<<<<< HEAD
import { mediumBukett2 } from "assets/mediumBukett2.jpg"

=======
import mediumBukett2 from "assets/mediumBukett2.jpg"
import vitaRosor from "assets/vita_rosor.jpg"
import begravning2 from "assets/begravning2.jpg"
import mellanStol from "assets/mellanStol.jpg"
>>>>>>> d7e1f3e375028ec879c49264e73b3166f4db2e80

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
<<<<<<< HEAD
        <HighlightCard title="Bröllop" style={{ backgroundImage: `src(${mediumBukett2})` }} />
        <HighlightCard title="Begravning" />
        <HighlightCard title="Fest" />
        <HighlightCard title="Konferens" />
=======
        <HighlightCard
          roundImg={mediumBukett2}
          title="Bröllop" />
        <HighlightCard
          roundImg={begravning2}
          title="Begravning" />
        <HighlightCard
          roundImg={vitaRosor}
          title="Fest" />
        <HighlightCard
          roundImg={mellanStol}
          title="Konferens" />
>>>>>>> d7e1f3e375028ec879c49264e73b3166f4db2e80
      </CategoryImgsWrapper>
      <Banner />
      <Footer />
    </AppWrapper>
  );
};
