import React from "react";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { cart } from "reducers/cart";
import { ProductPage } from "components/ProductPage";
import { Link } from "react-router-dom";
import { products, singleProduct } from "reducers/products";

const ProductCard = styled.div`
  width: 250px;
  background-color: #fff;
  margin: 10px;
  transition: all 1s;
  
  :hover{
      -webkit-animation: shadow-drop-2-bottom 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
              animation: shadow-drop-2-bottom 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;


    @-webkit-keyframes shadow-drop-2-bottom {
      0% {
        -webkit-transform: translateZ(0) translateY(0);
                transform: translateZ(0) translateY(0);
        -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
      100% {
        -webkit-transform: translateZ(50px) translateY(-12px);
                transform: translateZ(50px) translateY(-12px);
        -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
                box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
      }
    }
    @keyframes shadow-drop-2-bottom {
      0% {
        -webkit-transform: translateZ(0) translateY(0);
                transform: translateZ(0) translateY(0);
        -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
      100% {
        -webkit-transform: translateZ(50px) translateY(-12px);
                transform: translateZ(50px) translateY(-12px);
        -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
                box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
      }
    }
    
  }
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
  width: 100%;
  height: auto;
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

      <Link to={`/bouquets/${product._id}`} style={{ textDecoration: "none" }}>
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
