import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    }
  }
})

export const submitOrder = (
  items,
  userId,
  firstName,
  lastName,
  email,
  address,
  zipCode,
  city,
  phoneNumber,
  accessToken
) => {
  const SUBMIT_ORDER_URL = 'https://bouquetdb.herokuapp.com/orders'
  return (dispatch) => {
    fetch(SUBMIT_ORDER_URL, {
      method: 'POST',
      body: JSON.stringify({
        items,
        userId,
        firstName,
        lastName,
        email,
        address,
        zipCode,
        city,
        phoneNumber,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then(() => {
        dispatch(cart.actions.clearCart())
      })
  }
}