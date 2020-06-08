import React from "react";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { cart } from "reducers/cart";
import { ProductPage } from "components/ProductPage";
import { Link } from "react-router-dom";
import { products, singleProduct } from "reducers/products";

const ProductCard = styled.div`
  background-color: #fff;
  margin: 10px;
  box-shadow: 3px 3px #a6a6a6;
`;

const InfoSqaure = styled.h5`
  width: 100%;
  background-color: #ff7c98;
  color: #ffff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  border: none;
  margin: 0;
  padding: 10px 0;
`;

const BouquetImage = styled.img`
  height: 200px;
`;

const PriceTag = styled.h4`
  padding: 5px 10px 10px 10px;
  color: #ff7c98;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 24px;
`;

const ProductTitle = styled.h3`
  padding: 5px 10px;
  color: #ff7c98;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 24px;
`;

//send links with info ? Next step

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  dispatch(singleProduct(product._id));

  return (
    <>
      {/*länk till detalihjerad infosida med beställknapp*/}

      <Link to={`/bouquets/:id`} style={{ textDecoration: "none" }}>
        <ProductCard>
          <BouquetImage src={`${product.imageUrl} `} alt={product.name} />
          <ProductTitle>{product.name}</ProductTitle>
          <PriceTag>{product.price} kr</PriceTag>
          <InfoSqaure>Mer info</InfoSqaure>
        </ProductCard>
      </Link>
    </>
  );
};
