// Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

// function mergeArrays(arr1, arr2) {
//   let longArray = arr1.concat(arr2);

//   longArray.sort((a, b) => a - b);
//   return longArray;
// }

function mergeArrays(arr1, arr2) {
  let longArray = arr1.concat(arr2);
  let newArray = sort(longArray, 0, 1);
  return newArray;
}

function sort(arr, curr, next) {
  let currentVal = arr[curr];
  let nextVal = arr[next];

  if (curr === arr.length - 1) {
    return arr;
  }

  if (currentVal <= nextVal) {
    curr++;
    next++;
    return sort(arr, curr, next);
  } else if (currentVal > nextVal) {
    let temp = arr[curr];
    arr[curr] = arr[next];
    arr[next] = temp;
    curr = 0;
    next = 1;
    return sort(arr, curr, next);
  }
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

console.log(sort([2, 3, 5, 9, 8, 10], 0, 1)); // [ 2, 3, 5, 8, 9, 10 ]
console.log(sort([2, 3, 5, 8, 9, 8, 10], 0, 1)); // [ 2, 3, 5, 8, 8, 9, 10 ]
console.log(sort([1], 0, 1)); // [1]
console.log(sort([2, 3], 0, 1)); // [2, 3]
console.log(sort([3, 2], 0, 1)); // [2, 3]
console.log(sort([-3, 2], 0, 1)); // [-3, 2]
console.log(sort([2, 3, 5, -8, 9, -10], 0, 1)); // [ -10, -8, 2, 3, 5, 9 ]
console.log(sort([2, 25, 5, -8, 90, -10, 1, -12], 0, 1)); // [ -12, -10, -8, 2, 5, 25, 90 ]
