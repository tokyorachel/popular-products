import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

import productReducer from './productReducer';

import productData from '../data/seed';
import { sortByVote } from '../utils/sort';

const INCREASE_VOTE = 'INCREASE_VOTE';
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const sorted = sortByVote(productData);
  const [products, dispatch] = useReducer(productReducer, sorted);

  const addVote = (id) => {
    dispatch({
      type: INCREASE_VOTE,
      payload: { id }
    });
  }

  return (
    <ProductContext.Provider value={{ products, addVote }}>
      { children }
    </ProductContext.Provider>
  )
}

ProductProvider.propTypes = {
  children: PropTypes.node
}

export { ProductContext, ProductProvider};
