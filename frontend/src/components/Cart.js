import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CartItem } from './CartItem'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { cart } from "reducers/cart"

const Button = styled.button`
  background-color: #FF7C98;
  color: #FFFF;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-transform: uppercase; 
  outline: none;
  border: none;
  margin: 20px;
`


export const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((store) => store.cart.items)
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  return (
    <div>
      <>
        <p>Total: {totalPrice} kr</p>
      </>

      <ul>
        {products.map((product) => (
          <CartItem key={product._id} product={product} />
        ))}
      </ul>

      <Link className="aboutlink" to={"/checkout/"} style={{
        backgroundColor: "#FF7C98",
        color: "#FFFF",
        fontFamily: "Poppins",
        fontWeight: "700",
        textTransform: "uppercase",
        outline: "none",
        border: "none",
        margin: "20px"
      }}

      >Gå till betalning</Link>
    </div>
  )
}