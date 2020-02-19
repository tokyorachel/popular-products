import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
  const { title } = props;

  return <h1>{ title }</h1>
}

Heading.propTypes = {
  title: PropTypes.string
}

export default Heading;