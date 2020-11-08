import {some} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [5, 12, 8, 130, 44];

describe('some', () => {
  it('should check the value of at least one element is < 30', () => {
    function valueLessThan30(element) {
      return element < 30;
    };

    const nativeResult = testArray.some(valueLessThan30);
    const robDashResult = some(testArray, valueLessThan30);

    // robDashResult should be the same as nativeResult
    expect(robDashResult).toEqual(nativeResult);
  });

  it('should check the value of at least one element is > 0', () => {
    function valueGreaterThan0(element) {
      return element > 0;
    };

    const nativeResult = testArray.some(valueGreaterThan0);
    const robDashResult = some(testArray, valueGreaterThan0);

    // robDashResult should be the same as nativeResult
    expect(robDashResult).toEqual(nativeResult);
  });
});
