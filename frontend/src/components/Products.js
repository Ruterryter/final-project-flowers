import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Product } from "components/Product";

const ShopWrapper = styled.div`
  padding: 100px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  @media (max-width: 768px) {
    height: auto;
    flex-flow: column wrap;
  }
`;

export const Products = () => {
  const allProducts = useSelector((store) => store.products.allProducts);

  return (
    <ShopWrapper>
      {allProducts.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </ShopWrapper>
  );
};
