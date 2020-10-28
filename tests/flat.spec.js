import {flat} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [0, 1, 2, [[[3, 4]]]];

describe('flat', () => {
  it('should flatten the array up to the given depth', () => {
    const tests = [
      {depth: 0},
      {depth: 1},
      {depth: 2},
    ];

    for (const test of tests) {
      const nativeResult = testArray.flat(test.depth);
      const robDashResult = flat(testArray, test.depth);

      // robDash flat array should have the same length as the native
      // flat array
      expect(robDashResult.length).toEqual(nativeResult.length);

      // robDash should contain all the same elements as the native
      // flat array
      for (let i = 0; i < robDashResult.length; i++) {
        expect(robDashResult[i]).toEqual(nativeResult[i]);
      }
    }
  });
});
