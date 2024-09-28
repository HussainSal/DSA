console.log("medium problems");

/* 
    2 sum problem

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Approach :- 

Brute force :- 

let tempSump :- target - i (initialy 0),
second loop will start from j i.e 1, tempSum - j = 0 , if so then return [i,j], otherwise keep looping


optimised approach :- Hash map 

Steps :- 
1. Create a hashmap and execute a loop
2. variable comp will store the diff b/w target and current element,
3. if comp's index is present in hshmap then we will return comp index and i, by adding them we will get target.

4. if it is not present then we will store the current index in hash and move forward
5. then repeat the process, compute comp search if any previous num[i] is equal to complement if so then we will return the solution, if not we will add current num[i] in our hasmap

*/

function hashedSolution(nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    // getting remaining part needed
    let complement = target - nums[i];

    console.log(complement, nums[i], i, "VALUES");
    if (complement in hashMap) {
      // complement will be the number we need to complete target, then we will return the index of complement along with i, bcz when added it will give us target
      return [hashMap[complement], i];
    }

    // storing value in hashmap
    hashMap[nums[i]] = i;
    console.log(hashMap);
  }

  return [];
}

//    console.log(hashedSolution([3,2,4]    , 6));

/* 
    sort array,
    we have to use same arr for sorting
    
    Approach :- bcz there are only 0's ,1s and 2s so we have used binary search, Steps are as follows :- 

    1. create three var start, mid and end
    2. run while loop untill mid <= end
    3. if mid is at 2 , then we swap it with end , bcz 2 will in end and reduce end,
    4. if mid is at 1 , then we only inc mid , as it is ar correct position
    5. if mid is at 0, then se swap mid with start, and inc start and mid both

*/

function helper(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

function mergeSortRecursion(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  let mid = Math.floor(nums.length / 2);
  let left = mergeSortRecursion(nums.slice(0, mid));
  let right = mergeSortRecursion(nums.slice(mid));

  return helper(left, right);
}

function sortColors(arr) {
  let start = 0,
    mid = 0,
    end = arr.length - 1;

  while (mid <= end) {
    // if mid is at 2 , then we swap it with end, bcz 2 will be in end and reduce end by 1;
    if (arr[mid] == 2) {
      [arr[end], arr[mid]] = [arr[mid], arr[end]];
      end--;
    } else if (arr[mid] == 1) {
      // if mid is at 1 , then it means it is correct position as mid will be 1 and start will contain 0s, so we will just inc mid;

      mid++;
    } else {
      // if mid is at 0, then we will swap it with low and  increase start and mid both, because start is at correct position so start will inc, and mid bcz we need to inc mid after poisitoning anything at right position

      [arr[start], arr[mid]] = [arr[mid], arr[start]];
      start++;
      mid++;
    }
  }

  return arr;
}

// console.log(sortColors([2,0,2,1,1,0]),"sortColors")

/* 
    Majority Element
    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

    Approach :- create a hashmap, for every key of hashmap check if key is more than (arr.length/2) , if so then return it

*/

function majorityElement(arr) {
  let hashMap = {};

  for (let key of arr) {
    hashMap[key] = (hashMap[key] || 0) + 1;
  }

  for (let key in hashMap) {
    if (hashMap[key] >= Math.ceil(arr.length / 2)) {
      return key;
    }
  }
}

// console.log(majorityElement([2,2,1,1,1,2,2]),"MAJORITY_ELEMENT")

/*
    maximum subarray

Explanation of Kadane's Algorithm
Initialization:

We initialize two variables, maxCurrent and maxGlobal.

maxCurrent keeps track of the maximum sum of the subarray that ends at the current position.

maxGlobal keeps track of the maximum sum found so far.


Iteration:

We iterate through the array from the first element to the last.
For each element, we decide whether to add it to the existing subarray (maxCurrent + nums[i]) or start a new subarray (nums[i]).
We update maxCurrent to be the maximum of these two values.
If maxCurrent is greater than maxGlobal, we update maxGlobal with the value of maxCurrent.


Additional :- returning sub array instead of sum
we will create var for cosidering starting point, if we are initializing subarray then we will change the starting point , similarly at the end when we are assigning maxCurrent to maxGlobal, then we will create and end index and then we can either splice it or slice it and return new updated array


*/

function kadanesAlgorithm(arr) {}

console.log();

function kadanesAlgo(nums) {
  if (!nums.length) return 0;

  let maxGlobal = nums[0];
  let maxCurrent = nums[0];
  let start;
  let end;

  for (let i = 1; i < nums.length; i++) {
    // maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);

    if (nums[i] > maxCurrent + nums[i]) {
      maxCurrent = nums[i];
      start = i;
    } else {
      maxCurrent += nums[i];
    }

    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
      end = i;
    }
  }

  nums.splice(0, start); // Remove elements before the subarray
  nums.splice(end - start + 1); // Remove elements after the subarray

  return nums;
}

// console.log(kadanesAlgo( [-2,1,-3,4,-1,2,1,-5,4]),"kadanesAlgo")

/* 

Adv question 

Input : arr[] = [4, 3, 1, 5, 6]
Output : 11
*/

function bestTimeToBuy(prices) {
  let tempProfit = 0;
  let tempPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < tempPrice) tempPrice = prices[i];

    tempProfit = prices[i] - tempPrice;

    if (maxProfit < tempProfit) maxProfit = tempProfit;
  }

  return maxProfit;
}

// console.log(bestTimeToBuy( [7,1,5,3,6,4]), "BEST_TIME_BUY")

/*
    Rearrange the array in alternating positive and negative items

    You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

    You should return the array of nums such that the the array follows the given conditions:

    Every consecutive pair of integers have opposite signs.
    For all integers with the same sign, the order in which they were present in nums is preserved.
    The rearranged array begins with a positive integer.

    Input: nums = [3,1,-2,-5,2,-4]
    Output: [3,-2,1,-5,2,-4]
    Explanation:
    The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
    The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
    Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  

    Approach :- 
    1.create 2 sub arrays , one for positive num and other for negative.
    2. iterate over the orignal array and accordingly keep pushing elements in above 2 subarrays, this will seperate positive and negative elements and make sure the order is preserved.
    3.run loop in which we will start pushing element from nums1 and nums2 subarray into result array, it will contain elements in their orignal order as first it will push ith element from nums1 and then from nums2
*/

function rearrange(nums) {
  let nums1 = [];
  let nums2 = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nums2.push(nums[i]);
    } else {
      nums1.push(nums[i]);
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    result.push(nums1[i]);
    result.push(nums2[i]);
  }

  console.log(nums1, nums2);

  return result;
}

// console.log(rearrange( [-1,1]),"SAPPPP");

/*
    Longest cons number

    Approach ;- 

    loop and find the smallest number,

    then run another loop and check if there is number, create a hashmap and look for the lowest key if it is present, then find the next incremented value if present if so then increase the count 
    
*/

function longestCons(nums) {
  let min = Infinity;
  let count = 0;
  let pCount = 0;
  const fq1 = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
    fq1[nums[i]] = (fq1[nums[i]] || 0) + 1;
  }

  console.log(fq1, "FQ!!", min);

  for (let key in fq1) {
    console.log(
      `KEY:- ${key}`,
      `MIN:- ${min}`,
      `COUNT:- ${count}`,
      `FQ[min] :- ${fq1[min]}`,
      `Pcount:-${pCount}`
    );
    if (fq1[min]) {
      min = min + 1;
      count++;

      if (count > pCount) pCount = count;
    } else {
      min = min + 1;
      count = 0;
    }

    console.log(
      `AFTER KEY:- ${key}`,
      `MIN:- ${min}`,
      `COUNT:- ${count}`,
      `FQ[min] :- ${fq1[min]}`,
      `Pcount:-${pCount}`
    );
  }

  console.log(count);

  return pCount;
}

// console.log(longestCons([9,1,4,7,3,-1,0,5,8,-1,6]), "LONGESTT")

/*
Array Leaders
Input: n = 6, arr[] = {16,17,4,3,5,2}
Output: 17 5 2

Input: n = 5, arr[] = {10,4,2,4,1}
Output: 10 4 4 1

Approach :- 



*/

// bruteforce approach
function arrayLeaders(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (current >= arr[j] && j == arr.length - 1) {
        result.push(current);
      } else if (current < arr[j]) {
        break;
      }
    }
  }
  result.push(arr[arr.length - 1]);
  return result;
}

// console.log(arrayLeaders([16,17,4,3,5,2]),"arrayLeaders")

// optimized approach
function optimizedArrayLeaders(arr) {
  let greatest = 0;

  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];
    if (current >= greatest) {
      greatest = current;
      result.push(current);
    }
  }

  return result.reverse();
}

// console.log(optimizedArrayLeaders([10,4,2,4,1]),"arrayLeaders")

/*
    Set Matrix Zeroes
    Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
    Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

    Approach :- 
    1. create an array for columns and row which will contain bool if they contain 0, if so then we will mark repsective col and row as 0

    [t,f,f,t] for column , for row - [t,f,f] 
    [0,1,2,0]
    [3,4,5,2]
    [1,3,1,5]

*/

function setMatrixZeroes(matrix) {
  // array for storing columns where rows and column contains 0
  let columnBool = [];
  let rowBool = [];

  //mentioning 'T' for row and col at position where matrix contain 0 and empty otherwise
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        columnBool[j] = "T";
        rowBool[i] = "T";
      }
    }
  }

  // if rowBool contain 'T' i.e 0 then the entire row will be 0 , so we checked it at ith level for any 0 , and if that's the case then we made all the j's as 0
  for (let i = 0; i < matrix.length; i++) {
    if (rowBool[i] == "T") {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  // if columnBool array contain 'T' i.e 0 , then that column of every row pointed to 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (columnBool[j] == "T") {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

// console.log(
//   setMatrixZeroes([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5],
//   ]),
//   "MATRIXXX_ZEROES"
// );

/* Approach

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]


 j,i
[3,2,2,3]

 j,i
[0,1,2,2,3,0,4,2]

*/

function removeElements(nums, val) {
  let current = val;

  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == current) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }

  // for(let i = j-1 ; i< nums.length; i++){
  //     nums[i] = '_'
  // }

  return nums;
}

[0, 1, 2, 2, 3, 0, 4, 2], (val = 2);

// console.log(removeElements( [0,1,2,2,3,0,4,2],2), "SetMatrix")

/*
    Problem:- Rotate matrix

    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [[7,4,1],[8,5,2],[9,6,3]]

  [[1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]]

  [[7, 4, 1],
   [8, 5, 2],
   [9, 6, 3]];


   app :- every index inc by 2 , so the element which is at : -
    i   j     i    j
   [0] [0] = [0]  [2]
   [0] [1] = [1]  [2]
   [0] [2] = [2]  [2]
   
   [1] [0] = []
   [1] [2] = [2]  [1] bcz already at last index, walk reverse
    
   solution :- 

    

*/

function rotateMatrix(matrix) {
  const n = matrix.length;

  for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      let temp = matrix[n - 1 - j][i];

      // console.log(temp,"TEMP")
      //bottom left = bottom right
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];

      //bottom right = top right
      matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];

      //top right = top left
      matrix[j][n - 1 - i] = matrix[i][j];

      matrix[i][j] = temp;
    }
  }

  return matrix;
}

// console.log(
//   rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ],"RESULT")
// );

/*
  Spiral matrix 

Input: matrix =[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

Output: [1,2,3,6,9,8,7,4,5]

Approach :- 

from column begin toward column end :- matrix[rowBegin][j]

from last row toward last column :- matrix[j][colEnd]

from right bottom toward left :- j = colEnd , matrix[rowEnd][j]

from right left bottom toward top :- j=rowEnd, matrix [j][colBegin]

*/

function spiralMatrix(matrix) {
  const result = [];
  let colBegin = 0,
    columnEnd = matrix[0]?.length - 1,
    rowBegin = 0,
    rowEnd = matrix.length - 1;

  while (colBegin <= columnEnd && rowBegin <= rowEnd) {
    // from colbegin to end
    for (let j = colBegin; j <= columnEnd; j++) {
      result.push(matrix[rowBegin][j]);
    }
    rowBegin++;

    // from row begin to last
    for (let j = rowBegin; j <= rowEnd; j++) {
      result.push(matrix[j][columnEnd]);
    }
    columnEnd--;

    // from right end to left
    if (rowBegin <= rowEnd) {
      for (let j = columnEnd; j >= colBegin; j--) {
        result.push(matrix[rowEnd][j]);
      }
      rowEnd--;
    }

    if (colBegin <= columnEnd) {
      for (let j = rowEnd; j >= rowBegin; j--) {
        result.push(matrix[j][colBegin]);
      }
      colBegin++;
    }
  }

  return result;
}

// console.log(
//   spiralMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
//   "SPIRAL MATRIX"
// );

/*
  Longest subarray with sum K
arr[] = {10, 5, 2, 7, 1, 9}, k = 15 , total = 34
Output : 4
Explanation:  {5, 2, 7, 1}

Step-by-Step Iteration
Initialization:

sum = 0
maxlength = 0
hashMap = {}
Iterate through the array:


i = 0: arr[0] = 10
sum = sum + arr[0] = 0 + 10 = 10
Check: if (10 == 15) → False
Update hashMap: hashMap = {10: 0}

i = 1: arr[1] = 5
sum = sum + arr[1] = 10 + 5 = 15
Check: if (15 == 15) → True
Update maxlength: maxlength = i + 1 = 1 + 1 = 2
Update hashMap: hashMap = {10: 0, 15: 1}

i = 2: arr[2] = 2
sum = sum + arr[2] = 15 + 2 = 17
Check: if (17 == 15) → False
Calculate remaining = sum - k = 17 - 15 = 2
Check if hashMap[2] exists → False
Update hashMap: hashMap = {10: 0, 15: 1, 17: 2}

i = 3: arr[3] = 7
sum = sum + arr[3] = 17 + 7 = 24
Check: if (24 == 15) → False
Calculate remaining = sum - k = 24 - 15 = 9
Check if hashMap[9] exists → False
Update hashMap: hashMap = {10: 0, 15: 1, 17: 2, 24: 3}

i = 4: arr[4] = 1
sum = sum + arr[4] = 24 + 1 = 25
Check: if (25 == 15) → False
Calculate remaining = sum - k = 25 - 15 = 10
Check if hashMap[10] exists → True (it does, at index 0)
Calculate tempLength = i - hashMap[10] = 4 - 0 = 4
Update maxlength: maxlength = Math.max(maxlength, tempLength) = Math.max(2, 4) = 4
Update hashMap: hashMap = {10: 0, 15: 1, 17: 2, 24: 3, 25: 4}

i = 5: arr[5] = 9
sum = sum + arr[5] = 25 + 9 = 34
Check: if (34 == 15) → False
Calculate remaining = sum - k = 34 - 15 = 19
Check if hashMap[19] exists → False
Update hashMap: hashMap = {10: 0, 15: 1, 17: 2, 24: 3, 25: 4, 34: 5}

Final Output
After iterating through the array, the longest subarray that sums to 
𝑘 = 15
k=15 is [10, 5], which has a length of 2, and also the subarray [5, 2, 7, 1] can be considered for this
k, and it has a length of 4 based on the cumulative sum at the end.

*/

function longestSubarray(arr, k) {
  console.log(arr, k, "ARRAY_AND_K");

  const hashMap = {};
  let sum = 0;

  // for checking length of subarrays
  let maxlength = 0;
  let tempLength = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum == k) {
      maxlength = i + 1;
    }

    let remaining = sum - k;

    if (remaining) {
      tempLength = i - hashMap[remaining];
      console.log(remaining, "REMAINING", i, hashMap[remaining]);
      console.log(sum, arr[i], "VALUESSS", k, maxlength, tempLength);
      maxlength = Math.max(maxlength, tempLength);
    }

    if (!hashMap[sum]) {
      hashMap[sum] = i;
    }
  }

  return maxlength ? maxlength : 0;
}

console.log(longestSubarray([10, 5, 2, 7, 1, 9], 15), "LONGEST_SUBARRAY");

function longSubarray(arr, k) {
  const preSump = {};

  let sum = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
      maxLength = i + 1;
    }

    let remaining = sum - k;

    if (remaining) {
      length = i - preSump(remaining);
      maxLength = Math.max(maxLength, length);
    }

    if (!preSump[sum]) {
      preSump[sum] = i;
    }
  }
}

// console.log(longSubarray([10, 5, 2, 7, 1, 9],15),"LONGS_SUB_ARR")

/*
  Pascal's triangle


*/

function pascalTriangle(num) {
  const result = [];

  const firstRow = [1];

  // we have already added first row, so we will start loop from 1 and not with 0
  result.push(firstRow);

  for (let i = 1; i < num; i++) {
    const prvRow = result[i - 1];

    const row = [];

    // pushing the first element
    row.push(1);

    // It will not run for 2 row, as it only contain index 0 and 1, and i is already 1, so 1-1 = 0.
    for (let j = 0; j < i - 1; j++) {
      row.push(prvRow[j] + prvRow[j + 1]);
    }

    // pushing the last element
    row.push(1);

    result.push(row);
  }

  return result;
}

// console.log(pascalTriangle(5))

/*
  majority element
*/

function majorityElement(nums) {
  let percentage = Math.floor(nums.length / 3);
  let result = [];

  let fq1 = {};

  // console.log(percentage, "PERCENTAGE");
  for (let key of nums) {
    fq1[key] = (fq1[key] || 0) + 1;
  }

  // console.log(fq1, "fq1");

  for (let key in fq1) {
    // console.log(fq1[key] > percentage ? ,"KEYYYY")
    if (fq1[key] > percentage) {
      console.log(key, "keykey");
      result.push(key);
    }
  }

  // console.log(result, "RESULTTTT");
  return result;
}

// console.log(majorityElement([3,1,3]), "MAJORITY_ELEMNT")

/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1 ,2,-1,-4]

2 sub arrays,
sort the num in them in asc order

temSum = 0 , 
 
-1 + 0 + 1 = 0 first pair
-1,2,-4 = no pair




Output: [[-1,-1,2],[-1,0,1]] 
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter



fq1 : {

}

approach :- 

1.Sort the array adn then create a variable for storing the current elem, then take the array from new values i.e incremented value , then use two pointer appraoch such that :- currentVal + arr[i] + arr[j] = 0. if so , then push the elements in fq1 object




*/

function threeSum(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr, "ARRAYYYY");

  let result = [];
  let seen = new Set();

  // The reason why we stop at arr.length - 2 is because we have to stop 2 steps early to get a triplet
  for (let i = 0; i < arr.length - 2; i++) {
    // If the current value is the same as the previous one, skip it to avoid duplicates
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let currentVal = arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = currentVal + arr[left] + arr[right];

      if (sum === 0) {
        let triplet = [currentVal, arr[left], arr[right]];

        // Convert the triplet to a string to use in the Set for duplicate checking
        let tripletStr = triplet.toString();

        if (!seen.has(tripletStr)) {
          result.push(triplet);
          seen.add(tripletStr);
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  console.log(result, "RESULT");
  return result;
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
