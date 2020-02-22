import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, renderIntoDocument } from 'react-dom/test-utils';
import { ProductContext } from '../components/ProductContext';
import Product from '../components/Product';

describe('Test Product component', () => {
  const fakeProduct = {
      id: 1,
      title: 'Product',
      description: '',
      url: '#',
      votes: 0,
      submitterAvatarUrl: '',
      productImageUrl: '',
    }

  let container, count;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('Upvote button click fires addVote() from Context', () => {
    const addVote = jest.fn();

    render(
      <ProductContext.Provider value={{products:[], addVote}}>
        <Product data={fakeProduct} />
      </ProductContext.Provider>,
      container
    ); 

    const button = container.querySelector('button.upvote');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });        

    expect(addVote).toHaveBeenCalledTimes(1);    
  })
})
