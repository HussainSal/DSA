console.log("practice patterns");

{/* Frequency Counters */}

{/* 

 ques1 :-  write a function which accepts two arrays, it should return true if the value in the array has it's corressopnding value squared in the second array. The frequency of values must be same.

*/}

[1,2,4,] , [1,4,16]

function countSquare(arr1, arr2){
    {/* If length is different */}
    if(arr1.length != arr2.length) return

    let obj1 = {};
    let obj2 = {};


    for(let val of arr1){
        obj1[val] = (obj1[val] || 0) +1
    }


    for(let val of arr2){
        obj2[val] = (obj2[val] || 0) +1
    }

    for(let key in obj1){
        if(!( key **2 in obj2 )){
            return false
        }
        if(obj1[key] != obj2[key ** 2]){
            return false
        }
    }
    return true

}

console.log(countSquare([1,2,3,3],[1,4,9,9]))


// Frequency Counters

const anagrams =  (str1,str2) =>{

    if(str1) return false 

    let fq1 = {}
    let fq2 = {}

    for(let x of str1){
        fq1[x] = (fq1[x] || 0) +1
    }


    for(let x of str2){
        fq2[x] = (fq2[x] || 0) +1
    }
    
    // console.log(fq1,fq2,"STRINGGG");

    for(let key in fq1){
        if(fq1[key] !==fq2[key] ){
            return false
        }
    } 

    return true


}


// console.log(anagrams("anagram","nagram"),"BROSS");


// Multiplepointer pattern

function multiplePointer(arr){
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        let sum = arr[left] + arr[right];

        if(sum == 0){
            return [arr[left],arr[right]]
        }else if(sum > 0){
            right--
        }else {
            left++
        }
    }

    return undefined

}

// console.log(multiplePointer([-4,-3,-2,-1,0,1,2,3,10]),"JOINEDDD")


// COUNT UNIQUE VALUES
const arr = [1,2,2,3,4,2];

function uniqueArr(arr){
    if(arr.length == 0) null
    let x = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] != arr[x]){
            x++
            arr[i] = arr[x]
            // console.log("IN")
        }
    }

    // console.log(arr,x + 1,"ARRRR")
}

// console.log(uniqueArr(arr),"ARR")



// sliding window using native approach.
let maxSum = [2,6,9,2,1,8,5,6,3]

function maxSubarraySum (arr,num){
    if(arr.length < num) return null
     
    let max = -Infinity
    for(let i = 0; i < arr.length - num +1; i++){
        let temp = 0
        for(let j = i; j < num  ; j++){
            console.log(arr[j],"ARRAYY")
            temp += arr[j]
        }

        if(temp > max){
            max = temp
        }
        
        console.log(temp,max,"TEMP")
        
    }

    return max 

}


// console.log(maxSubarraySum(maxSum,3),"Sliding Window")





// Sliding window using optimized approach


//  [2,6,9,2,1,8,5,6,3]

// function slidingWindowSubTotal(arr,num){
//     let maxSum = 0;
//     let tempSum = 0;

//   for(let i = 0; i < num; i++){
//         tempSum += arr[i]
//   }

//   for(let i = num; i < arr.length ; i++){     
//     tempSum = tempSum - arr[i - num] + arr[i];
//     console.log(`max = ${maxSum}`,`temp = ${tempSum}`,`-${arr[i - num]}` ,`+${arr[i]}`,"CHECKKK")  
//     maxSum = Math.max(tempSum,maxSum); 
//   }

//   return maxSum

// }


let trial = [2,6,9,2,1,8,5,6,3]


function slidingWindowAgain(arr,n){
    let tempSum = 0;
    let max = 0;

    for(let x = 0; x < n; x++ ){
        tempSum += arr[x]
    }

    console.log(tempSum)

    for(let x = n ; x < arr.length;x++){
        tempSum = tempSum - arr[x - n] + arr[x] 
        max = Math.max(tempSum,max);
    }

    console.log("BRO THIS IS HERE")
    return max
}

console.log(slidingWindowAgain(trial,3))


// // merge sort
// function merge2(arr1,arr2){
//     let result = [];
//     let i= 0 ;
//     let j = 0;

//     while(i < arr1.length && j < arr2.length){
//         if(arr1[i] < arr2[j] ){
//             result.push(arr1[i]);
//             i++
//         }else{
//             result.push(arr2[j]);
//             j++
//         }
//     }

//     while(i < arr1.length){
//       result.push(arr1[i]);
//       i++
//      }
   
//   while(j < arr2.length){
//         result.push(arr2[j]);
//         j++
//     }

//     return result


// }


// function mergeSort(arr){
//     if(arr.length <= 1) return arr
//     let mid = Math.floor(arr.length /2);
//     let left =  mergeSort(arr.slice(0,mid));
//     let right = mergeSort( arr.slice(mid));
//     return merge2(left,right);

// }


// Merge Sort with comments

// create a function that will merge 2 sorted arrays

function merge2(arr1,arr2){
    let result = [];
    let i =0;
    let j = 0;

    // running while loop untill one of the array hits end.

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++
        }else{
            result.push(arr2[j]);
            j++
        }
    }

    // running loop for the remaining elements in arr1 or arr2
    while(i < arr1.length){
        result.push(arr1[i]);
        i++
    }

    while(j < arr2.length){
        result.push(arr2[j]);
        j++        
    }

    return result

}


// recursively calling function 

function  recursivelyFunction(arr){
    // base case
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = recursivelyFunction(arr.slice(0,mid));
    let right = recursivelyFunction(arr.slice(mid));

    return merge2(left,right);

}
                           
console.log(recursivelyFunction([8,2,4,10,4,1,0,8]),"BROOO")

console.log("blahhh")

function twoSummm (arr, n){
    // for(let i =0; i < arr.length -1; i++){

    //     for(let j =0; j<arr.length;j++){
    //         if(arr[i]+arr[j] == n){
    //             return [i,j]
    //         }
    //     }
    // }

    let left = 0;
    let right = arr.length -1;
    let sum = arr[left] + arr[right]

    while(left < right && sum != n){
        if(arr[left] + arr[right] != n){
            return [left,right]
        }else if(sum != n && left != right-1 ){
                right--;

        }else{
            left++
        }

    }

  



    


}

console.log(twoSummm([2,7,11,15],9),"TIMER")



