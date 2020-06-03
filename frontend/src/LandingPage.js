import React from "react";
import styled from "styled-components/macro";
const AppWrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;
const NavBar = styled.div`
  background-color: #FDE7EA;
  width: 100%;
  height: 100px;
  font-family: "Poppins";
  font-size: 42px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #FF7C98;
`;
const MainImgContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: pink;
`;
const SecondaryImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const SecondaryImgContainer = styled.div`
  margin: 0;
  width: 50%;
  height: 500px;
  background-color: grey;
`;
const SecondaryCardContainer = styled.div`
  margin: 0;
  width: 50%;
  height: 500px;
  background-color: #FF7C98;
`;
const CategoryImgsWrapper = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const CategoryImgs = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: orange;
`;
const CategoryCard = styled.div`
  margin: 0;
  width: 20%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const MidHeader = styled.h3`
  font-family: "Poppins";
  font-size: 24px;
  text-align: center;
  color: #4D4D4D;
  text-transform: uppercase;
`;
const Banner = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px 0 0 0;
  background-color: #7DB77D;
`;
const BannerText = styled.h4`
  margin-right: 20px;
  display: inline;
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: white;
`;
const BannerHashtags = styled.h4`
  margin-right: 20px;
  display: inline;
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  color: white;
`;
const Footer = styled.div`
  margin: 0;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #FF7C98;
`;
// Dekonstruera så alla delar är egna komponenter, plocka in komponenterna i Startpage
export const LandingPage = () => {
  return (
    <AppWrapper>
      <NavBar>NavBar</NavBar>
      <MainImgContainer></MainImgContainer>
      <SecondaryImgWrapper>
        <SecondaryImgContainer />
        <SecondaryCardContainer />
        <SecondaryCardContainer />
        <SecondaryImgContainer />
      </SecondaryImgWrapper>
      <CategoryImgsWrapper>
        <CategoryCard>
          <CategoryImgs />
          <MidHeader>Hej</MidHeader>
        </CategoryCard>
        <CategoryCard>
          <CategoryImgs />
          <MidHeader>Hej</MidHeader>
        </CategoryCard>
        <CategoryCard>
          <CategoryImgs />
          <MidHeader>Hej</MidHeader>
        </CategoryCard>
        <CategoryCard>
          <CategoryImgs />
          <MidHeader>Hej</MidHeader>
        </CategoryCard>
      </CategoryImgsWrapper>
      <Banner>
        <BannerText>Buketter för hemleverans i skåne </BannerText>
        <BannerHashtags>#MinBukett #Buketter</BannerHashtags>
        <BannerText>Buketter för hemleverans i skåne </BannerText>
      </Banner>
      <Footer></Footer>
    </AppWrapper>
  );
};