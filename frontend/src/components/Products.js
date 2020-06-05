import React from "react"
import { useSelector } from "react-redux"
import { Product } from "components/Product"

//Lägga till fetch från databasen istället?

export const Products = () => {

  const allProducts = useSelector((store) => store.products)

  return (
    <>
      {allProducts.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </>
  )
}