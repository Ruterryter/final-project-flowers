import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro"
import { NavBar } from "components/Navbar"
import { Cart } from "components/Cart"
import { Footer } from "components/Footer"
import { LogIn } from "components/LogIn"
import { OrderSummary } from "components/OrderSummary"
import { accessToken } from "reducers/user"


export const Checkout = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken)
  return (
    <>
      <NavBar />
      <>
        {accessToken ? <OrderSummary /> : <LogIn />}
      </>
      <Footer />
    </>
  )
}