import {reduceRight} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [1, 2, 3, 4];

describe('reduceRight', () => {
  it('should return the sum of all the values', () => {
    function sumOfValues(accumulator, element) {
      return accumulator + element;
    };

    const nativeResult = testArray.reduceRight(sumOfValues);
    const robDashResult = reduceRight(testArray, sumOfValues);

    // robDashResult should be the same value as nativeResult
    expect(robDashResult).toEqual(nativeResult);
  });

  it('should return an the highest value', () => {
    function highestValue(accumulator, element) {
      return accumulator || 0 > element ? accumulator : element;
    };

    const nativeResult = testArray.reduceRight(highestValue);
    const robDashResult = reduceRight(testArray, highestValue);

    // robDashResult should be the same value as nativeResult
    expect(robDashResult).toEqual(nativeResult);
  });
});
