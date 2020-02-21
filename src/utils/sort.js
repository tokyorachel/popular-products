export const sortByVote = (products) => {
  return products.sort((a, b) => b.votes - a.votes)
}