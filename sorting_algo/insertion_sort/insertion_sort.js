console.log("Hello Insertion")


let arr = [2,1,9,76,4]

function insertionSort(arr){
    for(let i = 1; i < arr.length;i++){
        let currentVal = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] > currentVal ; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }

    console.log(arr[j],"TRIAL")
    return arr
}

console.log(insertionSort(arr),"CHECK")



// writing own insetion sort

let trial = [14, 12,16, 6, 3, 10];

function customInsertion(arr){

    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        for(let j = i-1; j >= 0 && arr[j] > currentVal; j-- ){
            [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
        }
        // arr[j+1] = currentVal 
        // console.log(arr[j+1],arr[j],"BF")
        // console.log(arr[j+1],arr[j],"AF")
    }

    return arr

}


console.log(customInsertion(trial),"TEST")


// bubble sort

function Bubbs(arr){

    let swap = true;

    for(let i = arr.length -1; i >= 0; i--){
        for(let j = 0; j <= i;j++ ){
            if(arr[j] > arr[j+1]){
                swap = false;
                // let temp = arr[j];
                // arr[j] = arr[j+1];
                // arr[j+1] = temp

                // es6 swapping
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }

        if(swap){
            break
        }
    }
    return arr
}


function selectionSort2(arr){

    for(let i = 0; i < arr.length;i ++){
        let min = i;
        for(let j = i+1; j < arr.length; j++ ){
            if(arr[min] > arr[j] ){
                min = j
            }
        }

        if(arr[i] > arr[min] ){
            [arr[min],arr[i]] = [arr[i],arr[min]]
        }

    }

    return arr

}

console.log(selectionSort2([10, 9, 11, 7, 6, 5, 4, 3, 2, 1]),"checkSort")

// console.log( Bubbs([2,1,9,76,4]),"BUBBS")

// naive approach

var runningSum = function(nums) {

    // creating empty array for storing value
    let newT = [];

    for(let x = 0; x < nums.length ; x++){
        let current = 0;

        for(let l = x ; l >= 0; l--){
            console.log(nums[l],"IS");
            current += nums[l]
        }
        console.log(current)
        newT.push(current)
        // nums[x] = current
    }
    return newT
};



// console.log(runningSum([1,2,3,4]),"PROB1")


// prob2 :-
