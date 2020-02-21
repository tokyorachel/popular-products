import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

import productData from '../data/seed';
import { sortByVote } from '../utils/sort';

const ProductContext = createContext();
const INCREASE_VOTE = 'INCREASE_VOTE';

const productReducer = (state = [], action) => {
  if (action.type === INCREASE_VOTE) {
    const updated = state.map(product => {
      if (product.id === action.payload.id) {
        return { ...product, votes: product.votes + 1};
      } else {
        return product
      }
    }) 
    return sortByVote(updated);
  }
  return state;
}

const ProductProvider = ({children}) => {
  const sorted = sortByVote(productData);
  const [products, dispatch] = useReducer(productReducer, sorted);

  const addVote = (id) => {
    dispatch({
      type: INCREASE_VOTE,
      payload: { id }
    });
  }

  return (
    <ProductContext.Provider value={{products, addVote}}>
      {children}
    </ProductContext.Provider>
  )
}

ProductProvider.propTypes = {
  children: PropTypes.node
}

export { ProductContext, ProductProvider};
