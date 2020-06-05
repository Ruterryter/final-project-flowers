import React from "react"
import styled from "styled-components/macro"
import { useDispatch } from "react-redux"
import { cart } from "reducers/cart"
import { ProductPage } from "components/ProductPage"
import { Link } from 'react-router-dom'
import { products } from "reducers/products"

const id = products._id

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
const BouquetImage = styled.img`
height: 200px;
`

const PriceTag = styled.h4`
color: #FF7C98;
font-family: 'Poppins', sans-serif;
font-weight: 700;
font-size: 24px;
`

const ProductTitle = styled.h3`
color: #FF7C98;
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 28px;
`

export const Product = ({ product }) => {
  const dispatch = useDispatch()

  //  const clickedProduct = ({id}) => {
  //   gå till ProductPage plocka med id för buketten
  //  }


  return (
    <>
      <Link key={product.id} to={`/bouquets/${id}`}>
        <BouquetImage src={`${product.imageUrl}`} alt={product.name} />
        <ProductTitle>{product.name}</ProductTitle>
        <PriceTag>{product.price} kr</PriceTag>

        {/* //Hur ska man göra så att man kommer till ProductPage onclick och länk på hela rutan?  */}



        <Button type="button">
          Mer info
      </Button>
      </Link>
    </>
  )
}