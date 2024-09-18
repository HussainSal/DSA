console.log("TESTTTT");

// 1. Two sum :-

// a :- using naive approach 0(n)2
function twoSum(arr, num){
    console.log();

    let res ;
    for(let i =0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            console.log(arr[i]+ arr[j])
            if(arr[i] + arr[j] == num){
                res = [j,i]
                return res ? res : undefined
            }
        }
    }
   return  undefined
}

// console.log(twoSum([3,3],6))

// b :- using multiple pointer approach = o (nlog n) because of sort.

function twoSumPro(arr,num){
     arr.sort();
    //  console.log(arr,"SORT")

     let left = 0;
     let right = arr.length -1;
     let sum 

     while(left <= right){
         sum = arr[left] + arr[right];
         console.log(sum,arr[left],arr[right])
        if(sum == num){
            return [left,right]
        }else if(sum < num){
            left ++
        }else {
            right --
        }
     }

     return undefined

}

// console.log(twoSumPro([2,3,4],6))

// using third approach :- Frequency counters 

function twoSumFrequency(arr,num){

}



