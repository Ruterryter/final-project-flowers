import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'

export const CartItem = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <li>
      <div> {product.name}</div>
      <div>
        <span> Antal  {product.quantity} st </span>
        <div >Totalsumma {product.price * product.quantity} kr</div>
      </div>

      <span>
        <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
        <button type="button" onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
      </span>
    </li>
  )
}