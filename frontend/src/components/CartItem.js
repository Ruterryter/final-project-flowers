import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'

export const CartItem = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <li>
      <div aria-label="vald produkt"> {product.name}</div>
      <div>
        <span aria-label="antal produkter"> Antal  {product.quantity} st </span>
        <div aria-label="totalsumma" >Totalsumma {product.price * product.quantity} kr</div>
      </div>

      <span>
        <button aria-label="ta bort en produkt" type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
        <button aria-label="lägg till en produkt" type="button" onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
      </span>
    </li>
  )
}