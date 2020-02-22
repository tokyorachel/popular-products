import React from 'react';
import PropTypes from 'prop-types';

import '../styles/heading.css';

const Heading = (props) => {
  const { title } = props;

  return <h1 className="heading">{ title }</h1>
}

Heading.propTypes = {
  title: PropTypes.string
}

export default Heading;
