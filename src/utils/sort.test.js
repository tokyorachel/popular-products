import { sortByVote } from './sort';

describe('sortByVote utility', () => {
  test('sort() returns items sorted in order of descending votes', () => {
    const testArray = [{votes: 10}, {votes: 50}, {votes: 30}, {votes: 20}];
    const sorted = sortByVote(testArray);
    expect(sorted).toStrictEqual([{votes: 50}, {votes: 30}, {votes: 20}, {votes: 10}]);
  })
});