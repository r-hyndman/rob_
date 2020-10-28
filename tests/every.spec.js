import {every} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [5, 12, 8, 130, 44];

describe('every', () => {
  it('should check the value of each element is < 30', () => {
    function valueLessThan30(element) {
      return element < 30;
    };

    const nativeResult = testArray.every(valueLessThan30);
    const robDashResult = every(testArray, valueLessThan30);

    // robDashResult should be the same as nativeResult
    expect(robDashResult).toEqual(nativeResult);
  });

  it('should check the value of each element is > 0', () => {
    function valueGreaterThan0(element) {
      return element > 0;
    };

    const nativeResult = testArray.every(valueGreaterThan0);
    const robDashResult = every(testArray, valueGreaterThan0);

    // robDashResult should be the same as nativeResult
    expect(robDashResult).toEqual(nativeResult);
  });
});
