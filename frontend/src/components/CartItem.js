import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { cart } from "reducers/cart";

const CartWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-items: center;
  align-items: center;
`;

const InfoText = styled.h5`
  font-family: "Poppins";
  text-transform: none;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #4d4d4d;

  @media (max-width: 768px) {
    font-size: 14px;
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
  margin: 5px;
  padding: 5px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background-color: orange;
  }
`;

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <li>
<<<<<<< HEAD
      <CartWrapper>
        <InfoText>
          {product.quantity} st {product.name}
        </InfoText>
        <InfoText>
          <span> </span>
          <div>Total {product.price * product.quantity} kr</div>
        </InfoText>

        <span>
          <Button
            type="button"
            onClick={() => dispatch(cart.actions.addItem(product))}
          >
            +
          </Button>
          <Button
            type="button"
            onClick={() => dispatch(cart.actions.removeItem(product))}
          >
            -
          </Button>
        </span>
      </CartWrapper>
=======
      <div aria-label="vald produkt"> {product.name}</div>
      <div>
        <span aria-label="antal produkter"> Antal  {product.quantity} st </span>
        <div aria-label="totalsumma" >Totalsumma {product.price * product.quantity} kr</div>
      </div>

      <span>
        <button aria-label="ta bort en produkt" type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
        <button aria-label="lägg till en produkt" type="button" onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
      </span>
>>>>>>> hanna_dev
    </li>
  );
};
