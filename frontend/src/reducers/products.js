import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentProduct: {
    _id: '',
    name: '',
    price: '',
    description: '',
    image_URL: '',
  },
  allProducts: [],
  errorHandling: {
    errorMessage: '',
  },
};

export const products = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setProduct: (state, action) => {
      const { product } = action.payload;
      state.currentProduct = product;
    },
    setAllProducts: (state, action) => {
      const { allProducts } = action.payload;
      state.allProducts = allProducts;
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      state.errorHandling.errorMessage = errorMessage;
    },
  },
});

// HÄMTAR ALLA PRODUKTER FRÅN DB
export const allProducts = () => {
  const FLOWER_URL = 'https://bouquetdb.herokuapp.com/bouquets';
  return (dispatch) => {
    fetch(FLOWER_URL, {
      method: 'GET',
    })
      .then((res) => {
        if (res.ok /* if 200, 201, 204 */) {
          return res.json();
        }
        throw 'Could not show any products, please refresh page.';
      })
      .then((json) => {
        dispatch(products.actions.setAllProducts({ allProducts: json }));
      })
      .catch((err) => {
        dispatch(products.actions.setErrorMessage({ errorMessage: err }));
      }); //401
  };
};

// HÄMTAR EN PRODUKT BASERAD PÅ ID FRÅN DB
export const singleProduct = (id) => {
  const FLOWER_URL = `https://bouquetdb.herokuapp.com/bouquets/${id}`;
  return (dispatch, getState) => {
    fetch(FLOWER_URL, {
      method: 'GET',
    })
      .then((res) => {
        if (res.ok /* if 200, 201, 204 */) {
          return res.json();
        }
        throw 'Could not show any product, please refresh page.';
      })
      .then((json) => {
        dispatch(products.actions.setProduct({ currentProduct: json }));
      })
      .catch((err) => {
        dispatch(products.actions.setErrorMessage({ errorMessage: err }));
      }); //401
  };
};
