import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { ProductProvider } from '../components/ProductContext';
import ProductsList from '../components/ProductsList';

describe('Tests ProductsList component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('renders seed data from context', () => {
    const container = document.createElement('div');
    render(
      <ProductProvider>
        <ProductsList/>
      </ProductProvider>,
      container
    );
    expect(container.textContent).toMatch('Yellow Pail');
    expect(container.textContent).toMatch('Supermajority');
    expect(container.textContent).toMatch('Tinfoild');
    expect(container.textContent).toMatch('Haught');
  })
})
