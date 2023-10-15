const binarySearch = (items, item) => {
  let left = 0;
  let right = items.length - 1;

  while (left <= right) {
    const centerIndex = Math.floor((left + right) / 2);

    if (items[centerIndex] === item) {
      console.log(centerIndex);
      return centerIndex;
    }

    if (items[centerIndex].localeCompare(item) === 1) {
      right = centerIndex - 1;
    } else {
      left = centerIndex + 1;
    }
  }

  return null;
};
