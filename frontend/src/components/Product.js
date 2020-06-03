import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'

export const Product = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <>
      <p>{product.name}</p>
      <p>{product.price} kr</p>

      <button
        type="button"
        disabled={product.inventory === 0}
        onClick={() => dispatch(cart.actions.addItem(product))}>
        Add to cart
      </button>
    </>
  )
}