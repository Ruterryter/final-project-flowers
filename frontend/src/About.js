import React from "react"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { NavBar } from "components/Navbar"
import { Footer } from "components/Footer"

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ImgCard = styled.div`
  margin: 0;
  width: 50%;
  height: 500px;
  background-color: grey;
  background-image: url("https://dl.dropboxusercontent.com/s/70x6q4wfmhe9qp2/burkinsta.jpg?dl=0");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: pink;
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const TextCard = styled.div`
  margin: 0;
  width: 50%;
  height: 500px;
  background-color: pink;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const Title = styled.h2`
  margin: auto;
  font-family: "Poppins";
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  border-bottom: 1px solid #fff;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const InfoText = styled.h5`
  margin: auto 20px;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #4D4D4D;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const MidTitle = styled.h3`
margin: auto 20px;
font-family: 'Sacramento', cursive;
font-size: 45px;
font-weight: 500;
text-align: center;
color: #4D4D4D;
line-height: 80%;

@media (max-width: 768px) {
  font-size: 24px;
}
`

const StyledLink = styled(Link)`
  margin: auto;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 700;
  color: #ff7c98;
  text-align:center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s;

    &:hover {
        text-decoration: none;
        color: orange;
    }
`;

export const About = () => {

  return (
    <>
      <NavBar />
      <CardWrapper>
        <ImgCard></ImgCard>
        <TextCard>
          <Title>Vi gillar </Title>
          <MidTitle>blommor, smultron och hallonsaft!</MidTitle>
          <InfoText>... och tycker att alla ska njuta av vackra blommor i säsong direkt hem till sin dörr. Våra florister älskar att skapa vackra och kreativa buketter med det där lilla extra
            Vi binder alla typer av buketter och arrangemang såväl till hemmet, som till den stora konferensen och självklart till både bröllop och begravningar. Hör av er till oss så hjälper vi dig med dina blommande önskemål!.</InfoText>

          <StyledLink to={'/contact'}>Kontakta oss!</StyledLink>
        </TextCard>
      </CardWrapper>

      <Footer />
    </>
  )
}

