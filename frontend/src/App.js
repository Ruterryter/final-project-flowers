import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from '@reduxjs/toolkit';
import styled from 'styled-components';
import { user } from './reducers/user';
import { cart } from './reducers/cart';
import { products } from './reducers/products';
import { About } from 'Pages/About';
import { LogIn } from 'Pages/LogIn';
import { SignUp } from 'components/SignUp';
import { Contact } from 'Pages/Contact';
import { Checkout } from 'Pages/Checkout';
import { ConfirmationPage } from 'Pages/ConfirmationPage';
import { StartPage } from 'Pages/StartPage';
import { ProductPage } from 'Pages/ProductPage.js';
import { NavBar } from 'components/Navbar';
import { Banner } from 'components/Banner';
import { Footer } from 'components/Footer';

//import GoogleTagManager, {
//  trackPageView,
//} from '@redux-beacon/google-tag-manager';
//import logger from '@redux-beacon/logger';
//import { LOCATION_CHANGE } from 'react-router-redux';
//import { createMiddleware, createMetaReducer } from 'redux-beacon';

// redux-beacon google tag manger code

// const eventsMap = {
//   [LOCATION_CHANGE]: trackPageView((action) => ({
//     page: action.payload.pathname,
//   })),
// };

// const event = (action, prevState, nextState) => {
//   return {
//     event: pageview,
//     /* add any additional key/value pairs below */
//   };
// };

// const pageview = (action) => ({
//   hitType: 'pageview',
//   page: action.payload.pathname,
// });

// const variable = (action, prevState, nextState) => {
//   return {
//     variableName: 'hej' /* your variable value */,
//   };
// };

// const gtm = GoogleTagManager();

// const gtmMiddleware = createMiddleware(eventsMap, gtm, { logger });

// redux-beacon code ends

const AppWrapper = styled.div``;

const reducer = combineReducers({
  user: user.reducer,
  cart: cart.reducer,
  products: products.reducer,
});

// Retrieve the existing state from localstorage if it exists
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  persistedState,
  // applyMiddleware(gtmMiddleware),
  composeEnhancer(applyMiddleware(thunk))
);

// Tell the store to persist the state in localstorage after every action
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppWrapper>
          <NavBar />
          <Switch>
            <Route path='/' exact>
              <StartPage />
            </Route>
            <Route path='/about/' exact>
              <About />
            </Route>
            <Route path='/login/' exact>
              <LogIn />
            </Route>
            <Route path='/signup/' exact>
              <SignUp />
            </Route>
            <Route path='/contact/' exact>
              <Contact />
            </Route>
            <Route path='/bouquets/:id' exact>
              <ProductPage />
            </Route>
            <Route path='/checkout/' exact>
              <Checkout />
            </Route>
            <Route path='/confirmation/' exact>
              <ConfirmationPage />
            </Route>
          </Switch>
          <Banner />
          <Footer />
        </AppWrapper>
      </BrowserRouter>
    </Provider>
  );
};
