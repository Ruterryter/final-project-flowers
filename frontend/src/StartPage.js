import React, { useState } from "react"
import { LogIn } from "./components/LogIn"
import { SignUp } from "./components/SignUp"
import { Cart } from "./components/Cart"
import { ProductPage } from "./components/ProductPage"
import { Products } from "./components/Products"
import styled from "styled-components/macro"
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { user } from "./reducers/user"
import { cart } from "./reducers/cart"
import { products } from "./reducers/products"

const URL = "https://bouquetdb.herokuapp.com/users";

const reducer = combineReducers({
  user: user.reducer,
  cart: cart.reducer,
  products: products.reducer
});

const store = configureStore({ reducer });


const StyledContainer = styled.div`
  background-color: none;
  border: #0000 solid 2px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`


export const StartPage = () => {

  return (
    <Provider store={store}>
      <StyledContainer>
        <LogIn />
        <SignUp />
        <Cart />
        <Products />
        <ProductPage />
      </StyledContainer>
    </Provider>
  )
}

