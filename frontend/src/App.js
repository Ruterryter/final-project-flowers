import React, { useState } from "react";
import thunk from "redux-thunk";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StartPage } from "StartPage";
import { ProductPage } from "components/ProductPage";
import {
  configureStore,
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { user } from "./reducers/user";
import { cart } from "./reducers/cart";
import { products } from "./reducers/products";

const reducer = combineReducers({
  user: user.reducer,
  cart: cart.reducer,
  products: products.reducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, persistedState, composeEnhancer(applyMiddleware(thunk)))
const store = configureStore({ reducer });

export const App = () => {
  const [accessToken, setAccessToken] = useState();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
          <Route path="/bouquets/:id" exact>
            <ProductPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
