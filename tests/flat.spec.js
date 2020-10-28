import {flat} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [0, 1, 2, [[[3, 4]]]];

describe('flat', () => {
  it('should flatten the array up to depth 0', () => {
    const flattenDepth = 0;

    const nativeResult = testArray.flat(flattenDepth);
    const robDashResult = flat(testArray, flattenDepth);

    // robDash flat array should have the same length as the native
    // flat array
    expect(robDashResult.length).toEqual(nativeResult.length);

    // robDash should contain all the same elements as the native
    // flat array
    for (let i = 0; i < robDashResult.length; i++) {
      expect(robDashResult[i]).toEqual(nativeResult[i]);
    }
  });

  it('should flatten the array up to depth 2', () => {
    const flattenDepth = 2;

    const nativeResult = testArray.flat(flattenDepth);
    const robDashResult = flat(testArray, flattenDepth);

    // robDash flat array should have the same length as the native
    // flat array
    expect(robDashResult.length).toEqual(nativeResult.length);

    // robDash should contain all the same elements as the native
    // flat array
    for (let i = 0; i < robDashResult.length; i++) {
      expect(robDashResult[i]).toEqual(nativeResult[i]);
    }
  });
});
