import React from "react";
import styled from "styled-components/macro";
import { NavBar } from "./components/Navbar";
import { HeaderImg } from "./components/HeaderImg";
import { EyecatcherContainer } from "./components/EyecatcherContainer";
import { HighlightCard } from "./components/HighlightCard";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

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

// Dekonstruera så alla delar är egna komponenter, plocka in komponenterna i Startpage
export const LandingPage = () => {
  return (
    <AppWrapper>
      <NavBar />
      <HeaderImg />
      <EyecatcherContainer />
      <CategoryImgsWrapper>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </CategoryImgsWrapper>
      <Banner />
      <Footer />
    </AppWrapper>
  );
};
