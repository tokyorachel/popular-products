import React, { useReducer } from 'react';
import productReducer from '../components/productReducer';

describe('Tests productReducer', () => {
  const initialState = [{
        id: 1,
        title: 'Product',
        description: '',
        url: '#',
        votes: 0,
        submitterAvatarUrl: '',
        productImageUrl: '',
      }]
  const INCREASE_VOTE = 'INCREASE_VOTE';

  test('INCREASE_VOTE action should increase votes count by 1', () => {
    const action = {type: INCREASE_VOTE, payload: {id: 1}};
    const updatedState = productReducer(initialState, action);

    expect(updatedState[0].votes).toEqual(1);
  });

  test('Any other action should return initial state', () => {
    const action = {type: 'unknown', payload: {id: 1}};
    const updatedState = productReducer(initialState, action);

    expect(updatedState).toEqual(initialState);
  });
});
