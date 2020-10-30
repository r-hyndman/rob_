import {reduce} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [1, 2, 3, 4];

describe('reduce', () => {
  it('should return the sum of all the values', () => {
    function sumOfValues(accumulator, element) {
      return accumulator + element;
    };

    const nativeResult = testArray.reduce(sumOfValues);
    const robDashResult = reduce(testArray, sumOfValues);

    // robDashResult should be the same value as nativeResult
    expect(robDashResult).toEqual(nativeResult);
  });

  it('should return an the highest value', () => {
    function highestValue(accumulator, element) {
      return accumulator || 0 > element ? accumulator : element;
    };

    const nativeResult = testArray.reduce(highestValue);
    const robDashResult = reduce(testArray, highestValue);

    // robDashResult should be the same value as nativeResult
    expect(robDashResult).toEqual(nativeResult);
  });
});
