import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'

export const Cart = () => {
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
    </div>
  )
}