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

function findIndex(array, callback) {
  for (let i = 0; i < array.length; ++i) {
    if (callback(array[i], i, array)) return i;
  }
  return -1;
};

function flat(array, depth = 1) {
  let result = [];
  for (let i = 0; i < array.length; ++i) {
    if (Array.isArray(array[i]) && depth > 0) {
      result = result.concat((flat(array[i], depth - 1)));
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

export {
  every,
  filter,
  find,
  findIndex,
  flat,
};
