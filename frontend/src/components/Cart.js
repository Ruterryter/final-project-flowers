import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "./CartItem";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Paragraph = styled.p`
  color: #ff7c98;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const ShoppingList = styled.div`
  margin: 20px;
  color: #fff;
  text-transform: uppercase;
`;

const CartWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-items: space-between;
  align-items: center;
`;

const Ul = styled.ul`
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
    <CartWrapper>
      <>
        <Paragraph>Total: {totalPrice} kr</Paragraph>
      </>
      <ShoppingList>
        <Ul>
          {products.map((product) => (
            <CartItem key={product._id} product={product} />
          ))}
        </Ul>
      </ShoppingList>
      <Link
        className="aboutlink"
        to={"/checkout/"}
        style={{
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
    </CartWrapper>
  );
};
