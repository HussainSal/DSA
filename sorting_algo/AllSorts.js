// 1. Merge Sort

// this will be used for mergin two seperate arrays
const mergeHelper = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];

  // this loop will check which array has smaller element and then pushes it.
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // this loop enters all the remaining elements of arr1 in result
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // this loop enters all the remaining elements of arr2 in result
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

// this function will be called recursively
const merge = (arr) => {
  // base case
  if (arr.length <= 1) return arr;
  // computing mid
  const mid = Math.floor(arr.length / 2);
  // calling function on left and right part
  const lefPart = merge(arr.slice(0, mid));
  const rightPart = merge(arr.slice(mid));
  // returning mergeHelper
  return mergeHelper(lefPart, rightPart);
};

console.log(merge([1, 5, 6, 8, 2, 3, 4, 10]), "MERGE_CHECK");
