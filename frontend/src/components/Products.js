import React from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Product } from "components/Product"
import { createSlice } from '@reduxjs/toolkit'
import { products, allProducts } from "reducers/products"


export const Products = () => {
  const allProducts = useSelector((store) => store.products.allProducts)

  return (
    <>
      {allProducts.map((product) => (
        <Product key={product._id} product={product} />
      )
      )}
    </>
  )
}
