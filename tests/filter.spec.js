import {filter} from '../../src';

/* eslint-disable require-jsdoc */
const words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

describe('filter', () => {
  it('should filter each word by word.length > 6', () => {
    function wordLengthGreaterThan6(word) {
      return word.length > 6;
    }

    const nativeResult = words.filter(wordLengthGreaterThan6);

    const robDashResult = filter(words, wordLengthGreaterThan6);

    // robDash filtered array should have the same length as the native
    // filter result
    expect(robDashResult.length).toEqual(nativeResult.length)

    // robDash should contain all the same elements as the native
    // filter result
    for (let i = 0; i < robDashResult.length; i++) {
      expect(robDashResult[i]).toEqual(nativeResult[i]);
    }
  });
});
