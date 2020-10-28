import {findIndex} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [5, 12, 8, 90, 44];

describe('findIndex', () => {
  it('should find the index of the first element equalling 12', () => {
    function valueEquals12(element) {
      return element == 12;
    };

    const nativeResult = testArray.findIndex(valueEquals12);
    const robDashResult = findIndex(testArray, valueEquals12);

    // robDashResult should be the same as nativeResult
    expect(robDashResult).toEqual(nativeResult);
  });

  it('should find the index of the first element greater than 100', () => {
    function valueGreaterThan100(element) {
      return element > 100;
    };

    const nativeResult = testArray.findIndex(valueGreaterThan100);
    const robDashResult = findIndex(testArray, valueGreaterThan100);

    // robDashResult should be the same as nativeResult
    expect(robDashResult).toEqual(nativeResult);
  });
});
