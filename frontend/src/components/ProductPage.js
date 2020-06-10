import React from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { cart } from "reducers/cart";
import { products, singleProduct } from "reducers/products";
import { useParams } from "react-router-dom";
import { Cart } from "components/Cart"
import { LogIn } from "components/LogIn"

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
const PriceTag = styled.h4`
  color: #ff7c98;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 24px;
`;
const ProductTitle = styled.h3`
  color: #ff7c98;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 28px;
`;
const ProductInfoText = styled.p`
  color: #ff7c98;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
`;
const BouquetImageMedium = styled.img`
  height: 250px;
`;
//use selector to fecth info
//send a backend fetch to grab from backend

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((store) =>
    store.products.allProducts.find((product) => {
      return product._id === id;
    })
  );
  console.log(id);
  return (
    <>
      {/* Ska man använda singleProduct här istället? */}
      <BouquetImageMedium src={`${product.imageUrl}`} alt={product.name} />
      <ProductTitle>{product.name}</ProductTitle>
      <PriceTag>{product.price} kr</PriceTag>
      <ProductInfoText>{product.description}</ProductInfoText>

      <Button
        type="button"
        disabled={product.inventory === 0}
        onClick={() => dispatch(cart.actions.addItem(product))}
      >
        Beställ
      </Button>
      <Cart />
    </>
  );
};
