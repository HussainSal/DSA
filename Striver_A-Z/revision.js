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

dummy change
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

function moveZeroes (nums){
    // counter for non zero elements
    let j = 0;
    for(let i =0; i< nums.length; i++){
     
        if(nums[i] != 0 ){
            nums[j] = nums[i];
            j++
        }
    }

    // put 0 for remaining places
    while(j < nums.length){
        nums[j] = 0;
        j++;
    }

    return nums;

}


// console.log(moveZeroes([0,1,0,3,12]),"ZEROESSSS")

/*
 Max cons one
 [1,1,0,1,1,1]



*/

function maxConsOnes (nums){

    let maxCount= 0;
    let temCount= 0;

    for(let i =0; i < nums.length; i++){

        if(nums[i] == 1){
            temCount ++
            console.log('HERE',i,temCount)

        }else{
            if(temCount > maxCount){
                maxCount = temCount;
            }
            temCount = 0;
        }
    }

    if(temCount > maxCount){
        maxCount = temCount;
    }

    return maxCount 
}



// console.log(maxConsOnes( [1,1,0,1,1,1]),"MAX_CONS_ONES")

/* 
    Longest Sub-Array with Sum K

    eg :- 
Input : n = 6, arr[] = {10, 5, 2, 7, 1, 9}, k = 15
Output : 4
Explanation: The sub-array is {5, 2, 7, 1}.


kadanes algorithm

*/

function longestSubarray(nums, k) {
  
    let tempLength=0 ;
    let maxLength=0;
    let sum = 0;
    let start,end = 0;
    const hashMap = {};


    for(let i =0; i< nums.length; i++){
        //sum
        sum = sum + nums[i]

        // initializing max length
        if(sum === k){
            maxLength = i+1;
        }

        // calculating remainging
        let remaining = sum - k;

        // if remaining exist
        if(hashMap[remaining] != undefined){
            // This will be the length of K, because :- Total - remaining = k 
            tempLength = i - hashMap[remaining];
            // Now we can compare which one is greater, the initialized maxLength length or the tempLength

            if(tempLength > maxLength){
                start= hashMap[remaining]+1;
                end = i;
            }
            maxLength = Math.max(maxLength,tempLength); 
        }

        // assigning index of sum to hashmap if it is not present in hashmap 
        if(!hashMap[sum]){
           hashMap[sum] = i; 
        }

    }

    const check = nums.splice(start,end);
    console.log(check,"CHECKKKK")

    return maxLength
  

  
  }


  /*
  Rearrangement :-  Rearrange Array Elements by Sign

1.Every consecutive pair of integers have opposite signs.
2.For all integers with the same sign, the order in which they were present in nums is preserved.
3.The rearranged array begins with a positive integer.

Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
  */

  function rearrangeBySign(nums){
    let result = [];
    let posIndex =0;
    let negIndex =1;

    for(let i =0; i < nums.length; i++){
        if(nums[i] > 0){
            result[posIndex] = nums[i];
            posIndex += 2;
        }else{
            result[negIndex] = nums[i];
            negIndex +=2
        }
    }

    return result
    
  }

  console.log(rearrangeBySign([3,1,-2,-5,2,-4], 15),"RESULT_TODAY")


