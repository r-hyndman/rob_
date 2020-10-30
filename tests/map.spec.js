import {map} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [1, 4, 9, 16];

describe('map', () => {
  it('should return an array with sqrt of the values', () => {
    function sqrtOfValue(element) {
      return Math.sqrt(element);
    };

    const nativeResult = testArray.map(sqrtOfValue);
    const robDashResult = map(testArray, sqrtOfValue);

    // robDash map array should have the same length as the native
    // map array
    expect(robDashResult.length).toEqual(nativeResult.length);

    // robDash should contain all the same elements as the native
    // map array
    for (let i = 0; i < robDashResult.length; i++) {
      expect(robDashResult[i]).toEqual(nativeResult[i]);
    }
  });

  it('should return an array with the values doubled', () => {
    function doubleValue(element) {
      return element * 2;
    };

    const nativeResult = testArray.map(doubleValue);
    const robDashResult = map(testArray, doubleValue);

    // robDash map array should have the same length as the native
    // map array
    expect(robDashResult.length).toEqual(nativeResult.length);

    // robDash should contain all the same elements as the native
    // map array
    for (let i = 0; i < robDashResult.length; i++) {
      expect(robDashResult[i]).toEqual(nativeResult[i]);
    }
  });
});
