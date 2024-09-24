

// Array easy problems


/* 
    second largest :-
*/

function secondLargest (arr){

   let first = -Infinity, second = - Infinity;

   for(let key of arr){
        if(key > first){
            //  if there is any element which is bigger than the largest bigger element, then we will assign first i.e earlier largest to second and assign new value to first
            second = first;
            //assigning new value to first
            first = key
        }else if(first > key && key > second){
            second = key
        }

   }

   return second == -Infinity ? -1 : second;

}

// console.log(secondLargest( [2192, 13849, 3443 ,20919 ,10086 ,31384, 4405]), "ARRAYYYY");


/* 
   Check if Array Is Sorted and Rotated

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5]

*/

function rotatedSorted(nums){

    let index ;
    let j =0;
    for(let i =1; i < nums.length; i++){

        if(nums[i] >= nums[j]){
            j++
        }else{
            index = i;
            break
        }
        
    }



    let portion1 = nums.slice(0,index);
    let portion2 = nums.slice(index);

    let result = index ? [...portion2, ...portion1] : nums;

    // console.log(result,"RESSSS")
    let q = 0;
    for(let i =1; i < result.length; i++){
        // console.log(result[i] ,result[q], )
        if(result[i] >= result[q] ){
            q++
        }else{
            return false
        }
    }

    return true

}

// console.log(rotatedSorted( [[1,1,1]]),"ROTATED_SORTED")



/*
Rotate array

Input: nums = [1,2,3,4,5,6,7], k = 3

reversed :- [7,6,5,4,3,2,1]

reversal of k-1, i.e 2
[5,6,7,4,3,2,1]

reversal of k  i.e 3

[5,6,7,1,2,3,4]

Output: [5,6,7,1,2,3,4]

Approach :- 

go till kth index , then cut an array from there and create a subarray

*/


function rotate(nums, k){

    k = k % nums.length;
    // calling for entire array reversal 
    reverse(nums,0,nums.length-1);

    // calling for reversal of actual part
    reverse(nums,0,k-1);

    // reversing the remaining items to their correct position
    reverse(nums,k,nums.length-1);

    return nums

}


function reverse (nums,start,end){

    while(start<end){

        [nums[start],nums[end]] = [nums[end],nums[start]];
        start++
        end--
    }
}

// console.log(rotate([1,2,3,4,5,6,7], 3), "ROTATED_CHECKKKK")


/*
    Move zeroes

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]


*/



/*
    Problem :- move 0s to the end
                   
                       j   i
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

     
    
    Approach

*/

function moveZeores (nums){

    let j =0
    for(let i=0; i< nums.length; i++){
        if(nums[i] !== 0){
            [nums[i], nums[j]] = [nums[j], nums[i]]  
            j++
        }
        
        
    }

    console.log(j,"J_VALUE")

    for(let i = j ; i < nums.length; i++){
        nums[j] = 0
    }

    return nums

}



console.log(moveZeores( [0,1,0,3,12]), "MOVE_ZEROES");





function binarySearch(arr,K){
    
    let start = 0;
    let end = arr.length -1;
    
    while(start <= end ){
        let mid = Math.floor((start+end )/2);
        if(arr[mid] == K ){
            return 1;
        }else if(arr[mid] < K ){
            start = mid +1;
        }else{
            end =  mid 
        }
      }

   return  -1



}

// console.log(binarySearch([1 ,2, 3, 4, 6],6));

// Find the union

function findUnion(arr1,arr2,n,m){

    let fq1 = {}
    const result = []

    for(let key of arr1){
        fq1[key] = (fq1[key] || 0) + 1;
    }

    for(let key of arr2){
        fq1[key] = (fq1[key] || 0) + 1;
    }


    for(let key in fq1){
        result.push(key)
    }


}

// console.log(findUnion([1,2,3,4,5],[2,3,4,4,5,6],5,6))


/* 

Missing number

Approach :-  I will get the length of arr eg :- 3 , then I will count in reverse order and check which number is missing if 

*/

function missingNumber(arr){

    let n = arr.length;
    const fq1 = {}

    for(let key of arr){
        fq1[key] = (fq1[key] || 0) +1;
    }

    console.log(fq1,"FREQUENCY")
    for(let key in fq1){
        if(fq1[n]){
            n--
        }else{
            return n
        }
    }
   
}


// console.log(missingNumber([9,6,4,2,3,5,7,0,1]));

/* 
Max consecutive ones
 count = 1
    i
 [1,1,0,1,1,1]

1 iteration :- check if i is still 1 then inc the counter  

 count = 2
      i
 [1,1,0,1,1,1]

 2nd iteration :- if value of i is still 1 , if so inc the counter otherise it goes in else case where we set  max to count if count > max and set count to 0.

*/

function maxCons(nums){  
      let count = 0;
      let max = 0;

      for(let i =0; i < nums.length; i++){

        console.log(nums[i],count )
        if(nums[i] == 1){
            count = count +1
        }else{
            if(count > max){
                max = count;
            }
            count = 0;
        }

        if(count > max){

            max = count;
        }

      }

      return max

}

// console.log(maxCons([0,0]))


/* 
    longest sub-array with Sum K
                         j      i 
    Approach :- arr[] = {10, 5, 2, 7, 1, 9}, k = 15

    let i = 0;

    sub1 :- 10 +5  = k, so subarr =2,

    then 2nd iteration :- k - j + i = (15-10) + 2 = 7 != k


*/



