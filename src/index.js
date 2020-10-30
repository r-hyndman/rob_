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

function flatMap(array, callback) {
  const mapResult = [];
  for (let i = 0; i < array.length; ++i) {
    mapResult.push(callback(array[i], i, array));
  }
  let flatResult = [];
  for (let i = 0; i < mapResult.length; ++i) {
    if (Array.isArray(mapResult[i])) {
      flatResult = flatResult.concat((flat(mapResult[i])));
    } else {
      flatResult.push(mapResult[i]);
    }
  }

  return flatResult;
};

function forEach(array, callback) {
  for (let i = 0; i < array.length; ++i) {
    callback(array[i], i, array);
  }
};

function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; ++i) {
    result.push(callback(array[i], i, array));
  }
  return result;
};

function reduce(array, callback, initial) {
  let accumulator = initial == undefined ? array[0] : initial;
  const startIndex = initial == undefined ? 1 : 0;
  for (let i = startIndex; i < array.length; ++i) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
};

function reduceRight(array, callback, initial) {
  return reduce([...array].reverse(), callback, initial);
};

function some(array, callback) {
  for (let i = 0; i < array.length; ++i) {
    if (callback(array[i], i, array)) return true;
  }
  return false;
};

export {
  every,
  filter,
  find,
  findIndex,
  flat,
  flatMap,
  forEach,
  map,
  reduce,
  reduceRight,
  some,
};
