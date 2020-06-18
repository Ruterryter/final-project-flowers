import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { submitOrder } from "reducers/cart";
import headerPic from "../assets/Headerpic.jpeg";

const SummaryWrapper = styled.div`
  height: 100vh;
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

const SummaryContainer = styled.div`
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

const Title = styled.h2`
  margin: 20px auto 0 auto;
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: pink;
`;

const MidTitle = styled.h3`
  margin: 0 auto;
  margin-bottom: 20px;
  font-family: "Sacramento", cursive;
  font-size: 32px;
  font-weight: 500;
  color: #4d4d4d;
  line-height: 80%;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const InfoText = styled.h5`
  margin: auto 20px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 500;
  color: #4d4d4d;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const OrderSummary = () => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((store) => store.user.login.userId);
  const cartItems = useSelector((store) => store.cart.items);
  const firstName = useSelector((store) => store.user.login.firstName);
  const lastName = useSelector((store) => store.user.login.lastName);
  const address = useSelector((store) => store.user.login.address);
  const zipCode = useSelector((store) => store.user.login.zipCode);
  const city = useSelector((store) => store.user.login.city);
  const phoneNumber = useSelector((store) => store.user.login.phoneNumber);
  const email = useSelector((store) => store.user.login.email);
  const items = cartItems.map((item) => item._id);
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const handleSubmit = () => {
    dispatch(
      submitOrder(
        items,
        userId,
        firstName,
        address,
        lastName,
        email,
        zipCode,
        city,
        phoneNumber,
        accessToken
      )
    );
    history.push("/confirmation");
  };

  return (
    <>
      <SummaryWrapper>
        <SummaryContainer>
          {/* conditional rendering if order is empty? */}
          <Title key={orders._id}>
            {`Din beställning: ${cartItems[0].name} ${cartItems[0].price} kr.`}{" "}
          </Title>
          <Title> Dina leveransuppgifter</Title>
          <MidTitle>
            {firstName} {lastName}
          </MidTitle>
          <InfoText>{address}</InfoText>
          <InfoText>{zipCode}</InfoText>
          <InfoText>{city}</InfoText>

          <InfoText>{phoneNumber}</InfoText>
          <InfoText>{email}</InfoText>
          <Button onClick={() => handleSubmit()}> Skicka beställning </Button>
        </SummaryContainer>
      </SummaryWrapper>
    </>
  );
};
