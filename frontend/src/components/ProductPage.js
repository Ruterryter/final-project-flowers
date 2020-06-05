import React from 'react'
import styled from "styled-components/macro"
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import { products } from "reducers/products"

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

const ProductInfoText = styled.p`
color: #FF7C98;
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 16px;
`

const BouquetImageMedium = styled.img`
height: 250px;
`
//use selector to fecth info 

export const ProductPage = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <>
      <BouquetImageMedium src={`${product.imageUrl}`} alt={product.name} />
      <ProductTitle>{product.name}</ProductTitle>
      <PriceTag>{product.price} kr</PriceTag>
      <ProductInfoText>Denna tjusiga bukett passar både till vardag och fest</ProductInfoText>

      <Button
        type="button"
        disabled={product.inventory === 0}
        onClick={() => dispatch(cart.actions.addItem(product))}>
        Beställ
      </Button>
    </>
  )
}