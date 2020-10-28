export const every = (array, test) => {
  for (const element of array) {
    if (!test(element)) return false;
  }
  return true;
};

