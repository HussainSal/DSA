
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].



function runningSum(arr){

    console.log(arr);
    let result = []
    for(let i =0; i < arr.length; i++){
       if(i-1 != -1){
        result.push(arr[i] + result[i-1])
       }else{
        result.push(arr[i])
       }
        
    }

    return result

}

console.log(runningSum([1,2,3,4]),"RUNNINGSUMM")