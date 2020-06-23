import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Product } from "components/Product";

const ShopWrapper = styled.div`
  padding: 100px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: #fde7ea;

  @media (max-width: 768px) {
    height: auto;
    flex-flow: column wrap;
  }
`;

const ProductDiv = styled.div`
  padding: 100px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: #fde7ea;

  @media (max-width: 768px) {
    height: auto;
    flex-flow: column wrap;
  }
`;

const Title = styled.h1`
  font-family: "Poppins";
  font-size: 42px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #ff7c98;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Products = () => {
  const allProducts = useSelector((store) => store.products.allProducts);

  return (
    <ShopWrapper>
      <Title>Våra buketter</Title>
      <ProductDiv>
        {allProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </ProductDiv>
    </ShopWrapper>
  );
};
