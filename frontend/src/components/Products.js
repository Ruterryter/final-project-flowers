import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Product } from "components/Product";

const ShopWrapper = styled.div`
  padding: 50px;
  background-color: #fde7ea;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
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
