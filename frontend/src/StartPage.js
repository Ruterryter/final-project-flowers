import React, { useState } from "react"
import { LogIn } from "./components/LogIn"
import { SignUp } from "./components/SignUp"
import styled from "styled-components/macro"
import { Cart } from "./components/Cart"
import { Products } from "./components/Products"


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

    <StyledContainer>
      <LogIn />
      <SignUp />
      <Cart />
      <Products />
    </StyledContainer>
  )
}

