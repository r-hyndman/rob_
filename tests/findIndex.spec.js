import {findIndex} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [5, 12, 8, 130, 44];

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

  it('should find the index of the first element less than 20', () => {
    function valueLessThan20(element) {
      return element < 20;
    };

    const nativeResult = testArray.findIndex(valueLessThan20);
    const robDashResult = findIndex(testArray, valueLessThan20);

    // robDashResult should be the same as nativeResult
    expect(robDashResult).toEqual(nativeResult);
  });
});
