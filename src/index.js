/* eslint-disable require-jsdoc */
function every(array, callback) {
  for (const element of array) {
    if (!callback(element)) return false;
  }
  return true;
};

export {
  every,
};
