import React from 'react';
import PropTypes from 'prop-types';

import '../styles/upvote-button.css';

const UpvoteButton = ({callback}) => {
  return (
    <button className="button upvote" onClick={ callback }></button>
  )
}

UpvoteButton.propTypes = {
  callback: PropTypes.func
}

export default UpvoteButton;