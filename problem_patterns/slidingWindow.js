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
