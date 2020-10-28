/* eslint-disable require-jsdoc */
function every(array, callback) {
  for (let i = 0; i < array.length; ++i) {
    if (!callback(array[i], i, array)) return false;
  }
  return true;
};

function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; ++i) {
    if (callback(array[i], i, array)) result.push(array[i]);
  }
  return result;
};

function find(array, callback) {
  for (let i = 0; i < array.length; ++i) {
    if (callback(array[i], i, array)) return array[i];
  }
  return undefined;
};

export {
  every,
  filter,
  find,
};
