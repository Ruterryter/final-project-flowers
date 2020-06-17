import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { submitOrder } from "reducers/cart";
import { user } from "reducers/user"

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

  //testa igen 
  // const USERS_URL = `https://bouquetdb.herokuapp.com/users/${userId}`

  // useEffect(() => {
  //   fetch(USERS_URL, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: accessToken,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setOrders(json.orderHistory)
  //     })
  // }, [accessToken, USERS_URL])


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
      <h2>
        {`Din beställning: ${cartItems[0].name} ${cartItems[0].price} kr.`}{" "}
      </h2>
      <h2> Dina leveransuppgifter:</h2>
      <p>
        {firstName} {lastName}
      </p>
      <p>{address}</p>
      <p>{zipCode}</p>
      <p>{city}</p>

      <p>{phoneNumber}</p>
      <p>{email}</p>
      <Button onClick={() => handleSubmit()}> Skicka beställning </Button>
    </>
  );
};
