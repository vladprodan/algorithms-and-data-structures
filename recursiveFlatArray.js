const flat = (array) => {
  const result = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      result.push(...flat(item));
    } else {
      result.push(item);
    }
  }
  return result;
};

// flat([]) // [];
// flat([[1, 5], 5, 10]) // [1, 5, 5, 10];
// flat([1, 2, [3, 4]]) // [1, 2, 3, 4];
flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
