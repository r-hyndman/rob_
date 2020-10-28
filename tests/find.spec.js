import {find} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [5, 12, 8, 130, 44];

describe('find', () => {
  it('should find the first element that matches the test conditions', () => {
    const tests = [
      (element) => element == 12,
      (element) => element < 20,
      (element) => element > 10,
      (element) => element == 'find',
    ];

    for (const test of tests) {
      const nativeResult = testArray.find(test);
      const robDashResult = find(testArray, test);

      expect(robDashResult).toEqual(nativeResult);
    }
  });
});
