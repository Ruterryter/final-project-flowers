import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { cart } from 'reducers/cart';
import { useParams } from 'react-router-dom';
import { Cart } from 'components/Cart';

const Button = styled.button`
  background-color: #ff7c98;
  color: #ffff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  outline: none;
  border: none;
  margin: 20px;
  padding: 5px 15px;
`;

const PriceTag = styled.h2`
  margin: 0;
  font-family: 'Poppins';
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #4d4d4d;
`;

const MidTitle = styled.h3`
  margin: 0 auto;
  margin-bottom: 20px;
  font-family: 'Sacramento', cursive;
  font-size: 52px;
  font-weight: 500;
  text-align: center;
  color: #4d4d4d;
  line-height: 80%;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const InfoText = styled.h5`
  margin: auto 20px;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #4d4d4d;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ImgWrapper = styled.div`
  padding: 20px;
  width: 50%;
  height: auto;
  border: none;

  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
  }

  @media (min-width: 1024px) {
    width: 500px;
    height: 500px;
  }
`;

const BouquetImageMedium = styled.img`
  width: 100%;
  object-fit: contain;
`;

const DescriptionContainer = styled.div`
  margin: 0;
  width: 50%;
  background-color: #fff;
  display: flex;
  flex-flow: column wrap;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    flex-flow: column nowrap;
    padding: 50px 20px;
  }
`;

const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  @media (max-width: 768px) {
    height: auto;
    flex-flow: column wrap;
  }
`;

export const ProductPage = () => {
  window.dataLayer.push({
    dataLayer: {
      event: 'pageview',
      pagePath: '/bouquets',
      pageTitle: 'productpage',
    },
  });
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((store) =>
    store.products.allProducts.find((product) => {
      return product._id === id;
    })
  );

  return (
    <>
      <ProductWrapper>
        <ImgWrapper>
          <BouquetImageMedium
            src={`${product.imageUrl}`}
            alt={product.name}
            style={{
              marginBottom: '0',
              objectFit: 'cover',
            }}
          />
        </ImgWrapper>

        <DescriptionContainer>
          <MidTitle>{product.name}</MidTitle>
          <InfoText>{product.description}</InfoText>
          <PriceTag>{product.price} kr</PriceTag>
          <Button
            aria-label='beställknapp'
            type='button'
            disabled={product.inventory === 0}
            onClick={
              () => dispatch(cart.actions.addItem(product), 
              // Added Plausible custom event on button click
              window.plausible('AddItemToCart'))
            }
          >
            Beställ
          </Button>
          <Cart />
        </DescriptionContainer>
      </ProductWrapper>
    </>
  );
};
