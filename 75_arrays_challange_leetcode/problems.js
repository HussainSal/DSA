
//Leet code 75 :- https://leetcode.com/studyplan/leetcode-75/

/*
Problem 1 :- 1768. Merge Strings Alternately
*/


function mergeAlternately(word1,word2){

    const lengthy = word1?.length > word2?.length ? word1?.length : word2.length;
    let output = ""

    for(let i =0; i < lengthy; i++ ){
        
        if(word1[i]){
            output = `${output}${word1[i]}`
        }

        if(word2[i]){
            output = `${output}${word2[i]}`
        }
    }

    return output
}

// console.log(mergeAlternately("abcd","pq"),"MERGE_ALTERNATIVELY")


/* 
238. Product of Array Except Self

solution :- 

*/

function productArray (nums){
    console.log(nums,"NUMSS")
    let products = []
    for(let i =0;i<nums.length;i++){
        let temp = 1;
        for(let j = 0; j < nums.length ;j++){
            console.log(temp,"TEMPPP")
            if(i != j){
               temp = temp * nums[j];
            }
            console.log(temp,"TEMPPP_OUTSIDE")
        }
        products[i] = temp;   
    }
    return products
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

function findMaxAverage (nums,k){
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
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']); // Use a Set for O(1) lookups

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

console.log(maxVowels("abciiidef",3),"SOLUTIOn")