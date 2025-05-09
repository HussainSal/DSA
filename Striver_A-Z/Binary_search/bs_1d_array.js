console.log("BINARY_SEARCH");

function binarySearch(nums, target) {
  let left = 0;
  let right = nums?.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9), "BINARY_SEARCH");

/* 
    Find floor is about finding the second larget number before x
     x = 5 arr[] = {1,2,8,10,11,12,19}
     over here 1 index i,e 2 is the second largest before 5
*/

function findFloor(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    console.log(left, right, mid, arr[left], arr[right], arr[mid]);
    if (arr[mid] <= x) {
      return arr[mid - 1] < x ? mid - 1 : mid;
    } else if (arr[mid] > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

// console.log(findFloor([35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],79),"FLOOR")

/*
34. Find First and Last Position of Element in Sorted Array

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

*/

function findFirstAndLast(nums, target) {
  if (!nums.length) {
    return [-1, -1];
  }

  function helperFindPositino(isFirst) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    let position;

    while (left < right) {
      mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        position = mid;
        if (isFirst) {
          right = mid - 1; // bcz of this right will be mid, and search will continue in the left.
        } else {
          left = mid + 1; // bcz of this left will be mid, and search will continue in right.
        }
      } else if (nums[mid] < target) {
        left = mid = 1;
      } else {
        right = mid - 1;
      }

      return position;
    }
  }

  const firstPosition = helperFindPositino(true);
  const secondPosition = helperFindPositino(false);

  return [firstPosition, secondPosition];
}

// console.log(findFirstAndLast([2,2],2),"FIRST_AND_LAST")
/*
  33. Search in Rotated Sorted Array [IMP]
  Example 1:

  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4

  l = 0 , r = 6 , mid = 3 , val = 7.
  check if output is in the range from left to mid or mid to left. and then if not present in the range then eliminate that range

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1


Approach :- 

*/

function searchInRotatedArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(`MID:= ${mid}, LEFT:= ${left}, RIGHT:= ${right}`);

    // if target matches mid
    if (nums[mid] == target) return true;
    if (nums[left] < nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
}

// console.log(searchInRotatedArray([1,0,1,1,1],0),"SEARCH_IN_ROTATEDARRAY")

/* 
Find Peak Element

Peak is the element which is grater than the element on it's immediate left and immediate right. in second example we have 2 peaks. 2 at 1 index and 5 at 5 index.

Example 1:

Input: nums = [1,2,3,1]
Output: 2

Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5

approach :- 

Step 1:- find mind, i.e 3, check if left is smaller than 3 , yes, if right is also smaller than 3, if not  eleminate left half


*/

function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums[0] > nums[1]) {
    // console.log("HEREEE");
    return 0;
  }

  if (nums[nums.length - 1] > nums[nums.length - 2]) {
    // console.log(nums[nums.length - 1], "HEREEE", nums[nums.length - 2]);
    return nums.length - 1;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
    if (nums[mid + 1] > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 0;
}

console.log(findPeakElement([1, 2]), "FIND_PEAK_ELEMENT");


