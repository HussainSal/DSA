//Leet code 75 :- https://leetcode.com/studyplan/leetcode-75/

/*
Problem 1 :- 1768. Merge Strings Alternately
*/

function mergeAlternately(word1, word2) {
  const lengthy = word1?.length > word2?.length ? word1?.length : word2.length;
  let output = "";

  for (let i = 0; i < lengthy; i++) {
    if (word1[i]) {
      output = `${output}${word1[i]}`;
    }

    if (word2[i]) {
      output = `${output}${word2[i]}`;
    }
  }

  return output;
}

// console.log(mergeAlternately("abcd","pq"),"MERGE_ALTERNATIVELY")

/* 
238. Product of Array Except Self

solution :- 

*/

function productArray(nums) {
  console.log(nums, "NUMSS");
  let products = [];
  for (let i = 0; i < nums.length; i++) {
    let temp = 1;
    for (let j = 0; j < nums.length; j++) {
      console.log(temp, "TEMPPP");
      if (i != j) {
        temp = temp * nums[j];
      }
      console.log(temp, "TEMPPP_OUTSIDE");
    }
    products[i] = temp;
  }
  return products;
}

// optimizied solution

function productArray(nums) {
  const n = nums.length;
  const leftProducts = new Array(n);
  const rightProducts = new Array(n);
  const products = new Array(n);

  // Step 1: Calculate left products
  leftProducts[0] = 1; // There are no elements to the left of the first element
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  // Step 2: Calculate right products
  rightProducts[n - 1] = 1; // There are no elements to the right of the last element
  for (let j = n - 2; j >= 0; j--) {
    rightProducts[j] = rightProducts[j + 1] * nums[j + 1];
  }

  // Step 3: Calculate the result
  for (let k = 0; k < n; k++) {
    products[k] = leftProducts[k] * rightProducts[k];
  }

  return products;
}

// console.log(productArray([-1,1,0,-3,3]),"PRODUCT_ARRAY")

/* 
Sliding window pattern
643. Maximum Average Subarray I

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
*/

function findMaxAverage(nums, k) {
  let tempSum = 0;
  let maxSum = -Infinity; // To handle negative values in the array

  // Step 1: Calculate the sum of the first 'k' elements
  for (let i = 0; i < k; i++) {
    tempSum += nums[i];
  }

  // Initialize maxSum with the sum of the first 'k' elements
  maxSum = tempSum;

  // Step 2: Use sliding window technique to find the maximum sum
  for (let i = k; i < nums.length; i++) {
    // Update the window sum by adding the new element and removing the old one
    tempSum += nums[i] - nums[i - k];

    // Update maxSum if the new window sum is greater
    maxSum = Math.max(maxSum, tempSum);
  }

  // Step 3: Return the maximum average
  return maxSum / k;
}

// console.log(findMaxAverage([1,12,-5,-6,50,3],4),"TESTING_SOMETHING")

/*
1456. Maximum Number of Vowels in a Substring of Given Length

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.

   k
    i
leetcode

*/

function maxVowels(s, k) {
  let tempVowels = 0;
  let maxVowels = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]); // Use a Set for O(1) lookups

  // Count vowels in the first 'k' characters
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      tempVowels++;
    }
  }

  maxVowels = tempVowels;

  // Sliding window to count vowels in the rest of the string
  for (let i = k; i < s.length; i++) {
    // increase the count if current variable is a vowel
    if (vowels.has(s[i])) {
      tempVowels++;
    }

    // decrease the vowel count if previous value if is a vowel
    if (vowels.has(s[i - k])) {
      tempVowels--;
    }
    maxVowels = Math.max(maxVowels, tempVowels);
  }

  return maxVowels; // Return the maximum number of vowels found in any substring of length k
}

// console.log(maxVowels("abciiidef",3),"SOLUTIOn")

/* 
 Probelm :- 1004. Max Consecutive Ones III
 Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined. 


approach :- 

The goal is to find the maximum number of consecutive 1s we can achieve by flipping at most 2 zeroes.

Step-by-Step Execution
Initialize Variables:
left = 0 (start of the sliding window)
maxLength = 0 (stores the max length of consecutive 1s found so far)
zeroCount = 0 (counts zeroes in the current window)
We’ll iterate over nums with the right pointer and adjust the window as needed.

right = 0, nums[0] = 1

nums[0] is 1, so zeroCount remains 0.
Window: [1] (no zeroes, so zeroCount <= k).
Update maxLength = max(0, 0 - 0 + 1) = 1.
right = 1, nums[1] = 1

nums[1] is 1, so zeroCount remains 0.
Window: [1, 1].
Update maxLength = max(1, 1 - 0 + 1) = 2.
right = 2, nums[2] = 1

nums[2] is 1, so zeroCount remains 0.
Window: [1, 1, 1].
Update maxLength = max(2, 2 - 0 + 1) = 3.
right = 3, nums[3] = 0

nums[3] is 0, so increment zeroCount to 1.
Window: [1, 1, 1, 0].
Update maxLength = max(3, 3 - 0 + 1) = 4.
right = 4, nums[4] = 0

nums[4] is 0, so increment zeroCount to 2.
Window: [1, 1, 1, 0, 0] (now we have 2 zeroes, which is allowed).
Update maxLength = max(4, 4 - 0 + 1) = 5.
right = 5, nums[5] = 0

nums[5] is 0, increment zeroCount to 3 (now zeroCount > k).
Since zeroCount exceeds k, we start shrinking the window from the left.
Move left to 1. Since nums[0] = 1, zeroCount remains 3.
Move left to 2. Since nums[1] = 1, zeroCount remains 3.
Move left to 3. Since nums[2] = 1, zeroCount remains 3.
Move left to 4. Now, nums[3] = 0, so decrement zeroCount to 2.
Now, zeroCount <= k and window is [0, 0, 1, 1, 1, 1].
Update maxLength = max(5, 5 - 4 + 1) = 5.
right = 6, nums[6] = 1

nums[6] is 1, so zeroCount remains 2.
Window: [0, 0, 1, 1, 1, 1, 1].
Update maxLength = max(5, 6 - 4 + 1) = 6.
right = 7, nums[7] = 1

nums[7] is 1, so zeroCount remains 2.
Window: [0, 0, 1, 1, 1, 1, 1, 1].
Update maxLength = max(6, 7 - 4 + 1) = 7.
right = 8, nums[8] = 1

nums[8] is 1, so zeroCount remains 2.
Window: [0, 0, 1, 1, 1, 1, 1, 1, 1].
Update maxLength = max(7, 8 - 4 + 1) = 8.
right = 9, nums[9] = 1

nums[9] is 1, so zeroCount remains 2.
Window: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1].
Update maxLength = max(8, 9 - 4 + 1) = 9.
right = 10, nums[10] = 0

nums[10] is 0, increment zeroCount to 3.
Since zeroCount exceeds k, shrink the window by moving left.
Move left to 5. Now, nums[4] = 0, so decrement zeroCount to 2.
Now, zeroCount <= k and window is [1, 1, 1, 1, 1, 0].
maxLength remains 9 since `right - left + 1

*/
function longestOnes(nums, k) {
    let left = 0;
    let maxLength = 0;
    let zeroCount = 0;
  
    for (let right = 0; right < nums.length; right++) {
      // If the current element is 0, increment zeroCount
      if (nums[right] === 0) {
        zeroCount++;
      }
  
      // If zeroCount exceeds k, shrink the window from the left
      while (zeroCount > k) {
        if (nums[left] === 0) {
          zeroCount--;
        }
        left++;
      }
  
      // Update maxLength with the current window size
      maxLength = Math.max(maxLength, right - left + 1);
    }
  
    return maxLength;
  }
  

/*
2215. Find the Difference of Two Arrays
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
*/

function findDifference (nums1,nums2){

    let hashMap = {}
    let hashMap2 = {}


    for(let i = 0; i < nums1.length; i++){
        hashMap[nums1[i]] = (hashMap[nums1[i]] || 0) +1;
    }
    
    
    for(let i = 0; i < nums2.length; i++){
        hashMap2[nums2[i]] = (hashMap2[nums2[i]] || 0) +1;
    }
    


    let arr1 = []
    let arr2 = []

    for(let key in hashMap){        
        if(!hashMap2[key] ){
            arr1.push(Number(key))
        }
    }

    for(let key in hashMap2){        
        if(!hashMap[key] ){
            arr2.push(Number(key))
        }
    }

    return [arr1,arr2]

}

console.log(findDifference([1,2,3],[2,4,6]),"DIFFRENCE");