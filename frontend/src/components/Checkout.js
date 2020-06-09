import React from 'react'
import styled from "styled-components/macro"
import { NavBar } from "components/Navbar"
import { Cart } from "components/Cart"
import { Footer } from "components/Footer"
import { LogIn } from "components/LogIn"

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