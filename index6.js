const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]];

function flat(array) {
  return array
    .toString()
    .split(",")
    .map((i) => Number(i));
}

const flattedArray = flat(arr);
console.log(flattedArray);
