import {find} from '../src';

/* eslint-disable require-jsdoc */
const testArray = [5, 12, 8, 130, 44];

describe('find', () => {
  it('should find the first element with value equal to 12', () => {
    function valueEquals12(element) {
      return element == 12;
    };

    const nativeResult = testArray.find(valueEquals12);
    const robDashResult = find(testArray, valueEquals12);

    expect(robDashResult).toEqual(nativeResult);
  });

  it('should find the first element with value less than 20', () => {
    function valueLessThan20(element) {
      return element < 20;
    };

    const nativeResult = testArray.find(valueLessThan20);
    const robDashResult = find(testArray, valueLessThan20);

    expect(robDashResult).toEqual(nativeResult);
  });
});
