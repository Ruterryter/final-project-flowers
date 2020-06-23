import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { StartPage } from "Pages/StartPage.js";
import headerPic from "../assets/Headerpic.jpeg";

const CardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-image: url(${headerPic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: pink;
`;

const TextCard = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
background-color: #fde7ea;
padding: 100px 50px;
margin: 20px;
width: 45%;
opacity: 95%;
border: 2px solid #ff7c98;

@media (max-width: 768px) {
  width: 100%;
  padding: 20px;
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
  color: #ff7c98;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Button = styled.button`
  background-color: #ff7c98;
  color: #ffff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  outline: none;
  border: none;
  margin: 20px;
`;

export const ConfirmationPage = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);

  if (!accessToken) {
    return (
      <>
        <StartPage />
      </>
    );
  } else {
    return (
      <>
        <CardWrapper>
          <TextCard aria-label="beställningsbekräftelse">
            <Title>Tack för din beställning!</Title>
            <InfoText>
              Swisha summan för för buketten till swishnummer (123-xxx xxxx)
              senast onsdag kl 17:00 för att bekräfta din beställning. Vi
              leverar sedan blommorna hem till dig mellan klockan 15-17 på
              fredagar. Skulle du inte vara hemma ställer vi blommorna utanför i
              en liten hink med vatten så att de håller sig fräscha. Info om hur
              du bäst tar hand om din bukett medföljer.
            </InfoText>
            <Link
              aria-label="Gå tillbaka knapp"
              className="back-link"
              to={"/"}
              style={{
                margin: "auto",
                fontFamily: "Poppins",
                fontSize: "18px",
                fontWeight: "700",
                textTransform: "uppercase",
                textAlign: "center",
                color: "#ff7c98",
                textDecoration: "none",
              }}
            >
              Tillbaks
            </Link>
            <Button
              aria-label="Logga ut knapp"
              type="submit"
              onClick={(e) => dispatch(logout())}
              value="Logga ut"
            >
              Logga ut
            </Button>
          </TextCard>
        </CardWrapper>
      </>
    );
  }
};
