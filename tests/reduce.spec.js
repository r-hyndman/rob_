import {reduce} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [1, 2, 3, 4];

describe('reduce', () => {
  it('should return the sum of all the values starting with 0', () => {
    function sumOfValues(accumulator, element) {
      return accumulator + element;
    };

    const nativeResult = testArray.reduce(sumOfValues, 0);
    const robDashResult = reduce(testArray, sumOfValues, 0);

    // robDashResult should be the same value as nativeResult
    expect(robDashResult).toEqual(nativeResult);
  });

  it('should return the highest value', () => {
    function highestValue(accumulator, element) {
      return accumulator > element ? accumulator : element;
    };

    const nativeResult = testArray.reduce(highestValue);
    const robDashResult = reduce(testArray, highestValue);

    // robDashResult should be the same value as nativeResult
    expect(robDashResult).toEqual(nativeResult);
  });
});
