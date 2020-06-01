import React, { useState } from 'react'
import { LogIn } from "./components/LogIn"
import { SignUp } from "./components/SignUp"
import styled from "styled-components/macro"
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { user } from "./reducers/user";

const URL = "https://signinprojecttechnigo.herokuapp.com/users";

const reducer = combineReducers({ user: user.reducer });

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // To sign up a user.
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log("error:", err));
  };

  return (
    <Provider store={store}>
      <StyledContainer>
        <LogIn />
        <SignUp />
      </StyledContainer>
    </Provider>
  )
}

