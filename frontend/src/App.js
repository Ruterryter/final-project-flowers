import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LogIn } from "components/LogIn";
import { SignUp } from "components/SignUp";
import { Profile } from "components/Profile";
import { StartPage } from "StartPage";
import { LandingPage } from "LandingPage";
import { ProductPage } from "components/ProductPage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { user } from "./reducers/user";
import { cart } from "./reducers/cart";
import { products } from "./reducers/products";

const reducer = combineReducers({
  user: user.reducer,
  cart: cart.reducer,
  products: products.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  const [accessToken, setAccessToken] = useState();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/bouquets/:id" exact>
            <ProductPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
