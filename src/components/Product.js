import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ProductContext } from './ProductContext';
import UpvoteButton from './UpvoteButton';

import '../styles/product.css';

const Product = (props) => {
  const { addVote } = useContext(ProductContext);

  const {
    id,
    title,
    description,
    url,
    votes,
    submitterAvatarUrl,
    productImageUrl
  } = props.data;

  const vote = () => {
    addVote(id);
  }

  return (
    <div className="product">
      <div>
        <img src={ productImageUrl } alt={`${title}`} />
      </div>
      <div className="details">
        <div>
          <UpvoteButton callback={ vote } /><span className="count">{ votes }</span>
        </div>
        <a className="title" href={`/${url}`}>{ title }</a>
        <p>{ description }</p>
        <p className="attribution">Submitted by: <img src={ submitterAvatarUrl } alt='User avatar.'/></p>
      </div>
    </div>
  )
}

Product.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    votes: PropTypes.number,
    submitterAvatarUrl: PropTypes.string,
    productImageUrl: PropTypes.string
  })
}

export default Product;
