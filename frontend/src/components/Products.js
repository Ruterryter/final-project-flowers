import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Product } from "components/Product";
import { createSlice } from "@reduxjs/toolkit";
import { products, allProducts } from "reducers/products";

const ShopWrapper = styled.div`
  padding: 50px;
  background-color: #fde7ea;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

//lägg till loader

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
