import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { NavBar } from "components/Navbar"
import { Footer } from "components/Footer"
import mellanBank from "assets/mellanBank.jpg"

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-top: solid 20px #ff7c98;
`;

const ImgCard = styled.div`
  margin: 0;
  width: 50%;
  height: 500px;
  background-color: grey;
  background-image: url(${mellanBank});
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
  background-color: #fde7ea;
  display: flex;
  flex-direction: row;
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
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #ff7c98;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const InfoText = styled.h5`
  margin: auto 20px;
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #4D4D4D;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const Contact = () => {

  return (
    <>
      <>
        <NavBar />
        <CardWrapper>
          <ImgCard></ImgCard>
          <TextCard>
            <Title>Ta kontakt</Title>
            <InfoText>Skriv ett mail eller slå en singnal så hjälper vi dig med det perfekta blommorna.
            Våra florister älskar att skapa vackra och kreativa buketter med det där lilla extra Vi binder alla typer av buketter och arrangemang såväl till hemmet, som till den stora konferensen och självklart till både bröllop och begravningar.
            Hör av er till oss så hjälper vi dig med dina blommande önskemål!.
            </InfoText>


            <Link className="back-link" to={'/'} style={{
              margin: "auto",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: "700",
              textTransform: "uppercase",
              textAlign: "center",
              color: "#ff7c98",
              textDecoration: "none"
            }}>Tillbaks</Link>
          </TextCard>
        </CardWrapper>

        <Footer />
      </>
  )
}
    </>
  )
}