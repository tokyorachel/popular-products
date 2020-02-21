import React, { useContext } from 'react';

import Product from './Product';
import { ProductContext } from './ProductContext';

import '../styles/products-list.css';

const ProductsList = () => {
  const { products } = useContext(ProductContext);

  return (
    <ul className="products-list">
      { products.map((product) => {
        return (
          <li key={ product.id }>
            <Product data={ product }/>
          </li>
        )
      })}
    </ul>
  )
}

export default ProductsList;
