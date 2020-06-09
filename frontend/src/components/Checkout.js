import React from 'react'
import styled from "styled-components/macro"
import { NavBar } from "components/Navbar"
import { Cart } from "components/Cart"
import { Footer } from "components/Footer"
import { LogIn } from "components/LogIn"
import { ConfirmationPage } from "components/ConfirmationPage"

export const Checkout = () => {
  return (
    <>
      <NavBar />
      <Cart />
      <LogIn />
      {/* Visa bara checkout när inloggad och dölj då rutan med logIn. Lägg till logga ut knappen på checkoutkomponenten. */}
      <Footer />
    </>
  )
}