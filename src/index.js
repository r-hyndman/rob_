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

export const flat = (array, depth) => {
  let result = [];
  for (const element of array) {
    if (Array.isArray(element) && depth > 0) {
      result = [...result, ...(flat(element, depth - 1))];
    } else {
      result.push(element);
    }
  }
  return result;
};

export {
  every,
  filter,
  find,
  findIndex,
};

