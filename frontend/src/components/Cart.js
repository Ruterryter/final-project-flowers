import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "./CartItem";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartDiv = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin: 25px 0 10px 0;
  padding-top: 10px;
`;

const ShoppingList = styled.div`
  margin: 0;
  color: #4d4d4d;
  text-transform: uppercase;
`;

const Ul = styled.ul`
  margin: auto;
  padding: 0;
  list-style: none;
`;

export const Cart = ({ name, _id, price }) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) =>
    store.cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  );

  return (
<<<<<<< HEAD
    <>
      <ShoppingList>
        <CartDiv>
          <FontAwesomeIcon icon={faShoppingCart} /> Din kundkorg
        </CartDiv>
=======
    <CartWrapper>
      <>
        <Paragraph aria-label="pris">Total: {totalPrice} kr</Paragraph>
      </>
      <ShoppingList aria-label="valda produkter">
>>>>>>> hanna_dev
        <Ul>
          {products.map((product) => (
            <CartItem key={product._id} product={product} />
          ))}
        </Ul>
      </ShoppingList>
      <Link
        aria-label="länk till betalning"
        to={"/checkout/"}
        style={{
          marginTop: "20px",
          backgroundColor: "#FF7C98",
          color: "#FFF",
          fontFamily: "Poppins",
          fontWeight: "700",
          textTransform: "uppercase",
          textDecoration: "none",
          outline: "none",
          border: "2px solid #FF7C98",
          padding: "5px 15px",
        }}
      >
        Gå till betalning
      </Link>
    </>
  );
};
