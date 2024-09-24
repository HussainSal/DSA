console.log("REVISION")

/* 
Problem 1 :- 189. Rotate Array

Description :- 

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
       k     l
[1,2,3,7,5,6,4]

Steps to solve :- 

Step 1 :- Reverse the entire Array by calling reversal function

Step 2 :- reverse only the actual array, which is not suppose to be reversed i.e 0 to k-1,

Step 3 :- reverse the part that should have been reversed.
*/


function rotate (nums,k){

    k = k % nums.length;

    //reversal of entire array 
    helperReversal(nums,0, nums.length-1)
    
    // reversal of remaining array
    helperReversal(nums,0, k-1)

    // reversal of actial part
    helperReversal(nums,k, nums.length-1)

    return nums
}

function helperReversal (nums,start,end){
    while(start < end){
        [nums[start],nums[end]] =  [nums[end],nums[start]];
        start++;
        end--;
    }
}

// console.log(rotate([1,2,3,4,5,6,7],3),"ROTATE")


/*

Problen 2 :- 

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
                                   
Input: nums = [0,1,0,3,12]

Output: [1,3,12,0,0]



*/

// function moveZeroes (nums){


//     console.log(nums,"NUMSSSS");

//     let j = 0;
//     for(let i = 1; i < nums.length; i++){

//         if(nums[i] )

//     }

// }

console.log(moveZeroes([0,1,0,3,12]),"ZEROESSSS")