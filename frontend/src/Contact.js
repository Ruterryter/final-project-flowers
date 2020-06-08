import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Contact = () => {

  return (
    <>
      <p>Ring eller maila för kontakt </p>
      <Link className="back-link" to={'/'} >Tillbaks</Link>
    </>
  )
}