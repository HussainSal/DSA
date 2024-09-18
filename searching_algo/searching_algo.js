console.log("searchingAlgo");


// video 58 & 59

// linear search
function linearSearch(arr,val){

    for(let x of arr){
        if(arr[x] === val){
            return x;
        }
    }

    return -1
}


console.log(linearSearch([1,2,3,4,5], 3 ))

// Video 61 & 62 :- Intro to binary search

function binarySearch(arr,val){

    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2)

    while(arr[mid] !== val && left <= right ){
        if(val < arr[mid]){
            right = mid - 1; 
        }else {
            left = mid + 1
        }
       mid = Math.floor((left + right) / 2)
        
    }

    if(arr[mid] == val){
        return mid
    }

    return -1

}

// binary search custom


// console.log(customBinarySearch([2,5,6,9,13,15,28],13))


/* vido 65 :- navive string search 
Loop over the longer String
Loop over the shorter String
If character does not match, break out of the the inner loop,
If characters matches, keep going
If you complete the inner loop and find a match, increment the count of matches
Return the count. wowomgzomg omg
*/ 


function binarySearchCustom(arr, val){
    let left=0,
    right=arr.length -1,
    mid = Math.floor((left + right)/2)

    while(left <= right && arr[mid] !== val ){
        if(arr[left] < val ){
            left = mid +1 
        }else {
            right = mid -1
        }

        mid = Math.floor((left + right)/2)

    }

    if(arr[mid] == val){
        return val
    }

    return -1

}





function naiveSearch(long, short){

    let match = 0;

    for(let i = 0; i < long.length; i++ ){
        for(let j = 0; j < short.length; j++){
            console.log( `i:-${long[i+j]}`, `j:-${short[j]}`,"loop")
            if(long[i + j] != short[j]) break
            // console.log(long[i], short[j],"match",j, short.length -1) 
            if(j == short.length -1 ) {
                match++
            }
           
        }
    }

    return match

    
}






console.log(binarySearchCustom([2,4,6,13,56,78],56));

                {/* REVISION */}

console.log(naiveSearch("lorie loled", "lol"),"SEARCHHHH")                  
    

                    






















