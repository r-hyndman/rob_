import {filter} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [
  'spray',
  'limit',
  'exuberant',
  'destruction',
  'elite',
  'present',
];

describe('filter', () => {
  it('should filter each element with length of 5', () => {
    function elementLengthIs5(element) {
      return element.length == 5;
    };

    const nativeResult = testArray.filter(elementLengthIs5);
    const robDashResult = filter(testArray, elementLengthIs5);

    // robDash filtered array should have the same length as the native
    // filter result
    expect(robDashResult.length).toEqual(nativeResult.length);

    // robDash should contain all the same elements as the native
    // filter result
    for (let i = 0; i < robDashResult.length; i++) {
      expect(robDashResult[i]).toEqual(nativeResult[i]);
    }
  });

  it('should filter each element with first letter "e"', () => {
    function firstLetterIsE(element) {
      return element.charAt(0) == 'e';
    };

    const nativeResult = testArray.filter(firstLetterIsE);
    const robDashResult = filter(testArray, firstLetterIsE);

    // robDash filtered array should have the same length as the native
    // filter result
    expect(robDashResult.length).toEqual(nativeResult.length);

    // robDash should contain all the same elements as the native
    // filter result
    for (let i = 0; i < robDashResult.length; i++) {
      expect(robDashResult[i]).toEqual(nativeResult[i]);
    }
  });
});
