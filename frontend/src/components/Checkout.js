import React from 'react'
import styled from "styled-components/macro"
import { NavBar } from "components/Navbar"
import { Cart } from "components/Cart"
import { Footer } from "components/Footer"
import { LogIn } from "components/LogIn"
import { OrderSummary } from "components/OrderSummary"

// när inloggad dölj cart och visa bara ordersummary

export const Checkout = () => {
  return (
    <>
      <NavBar />
      <Cart />
      <LogIn />
      <Footer />
    </>
  )
}