import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './styles/global.css';

import Heading from './components/Heading';

const App = () => {
  return (
    <Heading title="Hello, Products App!" />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)