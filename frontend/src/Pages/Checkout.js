import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { NavBar } from "components/Navbar";
import { Footer } from "components/Footer";
import { LogIn } from "Pages/LogIn";
import { OrderSummary } from "components/OrderSummary";

export const Checkout = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  return (
    <>
      <NavBar />
      <>{accessToken ? <OrderSummary /> : <LogIn />}</>
      <Footer />
    </>
  );
};
