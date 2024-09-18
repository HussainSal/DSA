// Finding pivot point

function pivotIndex(arr){
    // 1. find a pivot , total of left, total of right, [1,7,3,6,5,6]
    let mid =  Math.floor(arr.length/2);
    let left = 0;
    let right =0;

    // while(left - right == 0){
     
    // }

    for(let i = 0; i< mid; i++){
        left += arr[i]
    }

    for(let i = mid +1; i< arr.length; i++){
        console.log(arr[i],i,right);
        right += arr[i]  
    }

    if(left - right == 0){
        return mid
    }else if(left - right > 0) {
        mid++
    }else{
        mid--
    }
   
}

const arr = [1,7,3,6,5,6]

// console.log(pivotIndex(arr),"ARRR")


// Find majority  [3,2,3]

function majorityElement(arr){

    let fq1 ={}
    let avgTime = arr.length/2
    let result ;

    for(let key of arr){
        fq1[key] = (fq1[key] || 0) +1
    }

    for(let key in fq1){
        if(fq1[key] > avgTime) result = key        
    }

    console.log(result)
    return result


}

console.log(majorityElement([2,2,1,1,1,2,2]),"ARRR")
