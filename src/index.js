/* eslint-disable require-jsdoc */
function every(array, callback) {
  for (let i = 0; i < array.length; ++i) {
    if (!callback(array[i], i, array)) return false;
  }
  return true;
};

export {
  every,
};
