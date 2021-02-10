// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

function maxSum(arr) {
  let maxSoFar = 0;
  let maxEndsHere = 0;
  for (let i = 0; i < arr.length; i++) {
    maxEndsHere += arr[i];
    if (maxSoFar < maxEndsHere) {
      maxSoFar = maxEndsHere;
    }
    if (maxEndsHere < 0) {
      maxEndsHere = 0;
    }
  }
  return maxSoFar;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));
