import { sortByVote } from '../utils/sort';

const INCREASE_VOTE = 'INCREASE_VOTE';

const productReducer = (state = [], action) => {
  if (action.type === INCREASE_VOTE) {
    const updated = state.map(product => {
      if (product.id === action.payload.id) {
        return { ...product, votes: product.votes + 1};
      } else {
        return product
      }
    }) 
    return sortByVote(updated);
  }
  return state;
}

export default productReducer;
