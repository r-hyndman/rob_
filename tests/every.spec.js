import {every} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [5, 12, 8, 130, 44];

describe('every', () => {
  it('should check each element matches the test conditions', () => {
    const tests = [
      (element) => Number.isInteger(element),
      (element) => element < 30,
      (element) => element > 0,
      (element) => element == 'every',
    ];

    for (const test of tests) {
      const nativeResult = testArray.every(test);
      const robDashResult = every(testArray, test);

      expect(robDashResult).toEqual(nativeResult);
    }
  });
});
