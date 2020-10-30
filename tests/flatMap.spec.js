import {flatMap} from '../src';

/* eslint-disable require-jsdoc */
const testArray = ['This test is', ' ', 'for', ' ', 'flatMap'];

describe('flatMap', () => {
  it('should return a flattened array of strings split by spaces', () => {
    function doSomething(element) {
      return element.split(' ');
    }

    const nativeResult = testArray.flatMap(doSomething);
    const robDashResult = flatMap(testArray, doSomething);

    // robDash flatMap array should have the same length as the native
    // flatMap array
    expect(robDashResult.length).toEqual(nativeResult.length);

    // robDash should contain all the same elements as the native
    // flatMap array
    for (let i = 0; i < robDashResult.length; i++) {
      expect(robDashResult[i]).toEqual(nativeResult[i]);
    }
  });
});
