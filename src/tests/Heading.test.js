import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Heading from '../components/Heading';

describe('Tests Heading component', () => {
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

  test('renders given title text', () => {
    render(<Heading title="hello" />, container);
    expect(container.textContent).toMatch('hello');
  })
})
