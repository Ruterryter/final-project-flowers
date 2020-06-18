import React from "react";
import { useSelector } from "react-redux";
import { LogIn } from "Pages/LogIn";
import { OrderSummary } from "components/OrderSummary";

export const Checkout = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  return (
    <>
      <>{accessToken ? <OrderSummary /> : <LogIn />}</>
    </>
  );
};
