import {findIndex} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [5, 12, 8, 130, 44];

describe('findIndex', () => {
  it('should find the index of the first matching condition', () => {
    const tests = [
      (element) => element == 12,
      (element) => element < 20,
      (element) => element > 10,
    ];

    for (const test of tests) {
      const nativeResult = testArray.findIndex(test);
      const robDashResult = findIndex(testArray, test);

      expect(robDashResult).toEqual(nativeResult);
    }
  });
});
