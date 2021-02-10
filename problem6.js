// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

// loop through array
// if num is smaller than 5, store index in error array
// loop through error array
// on each loop, remove that index value from original array
// return cleaned array

function removeSmallNums(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(removeSmallNums([0, 1, 5])); // [5]
console.log(removeSmallNums([5])); // [5];
console.log(removeSmallNums([0, 1, 4])); // []
console.log(removeSmallNums([])); // []
console.log(removeSmallNums([5, 5, 5])); // [5, 5, 5]
console.log(removeSmallNums([0, -1, 5])); // [5]
console.log(removeSmallNums([0, 5, 3])); // [5]
