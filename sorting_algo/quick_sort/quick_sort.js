console.log("QUICK")


// Video 94 :- Pivot helper introduction

let arr = [4,8,2,1,5,7,6,3] 


function swap(arr,i,j){
    [arr[i],arr[j]]=[arr[j],arr[i]]

}

function pivotHelper(arr, start = 0, endIndex=arr.length - 1){

    let pivot = arr[start]
    let swapIdx = start;

    for(let i =start + 1; i < arr.length; i ++){
        if(pivot > arr[i]){
            swapIdx++   
               swap(arr,swapIdx,i)
        }
    }

  swap(arr,start,swapIdx);
        
    return swapIdx

}





// console.log(pivotHelper(arr));

// Video 94 :- Quick sort implementation
function quickSort(arr, left = 0, right = arr.length -1){

    let pivotIndex = pivotHelper(arr,left,right);
    if(left < right) {
    
        // recursively calling quickSort for left
        quickSort(arr,left,pivotIndex - 1);
    
        // recursively calling quickSort for right
        quickSort(arr,pivotIndex + 1,right);
    }

    return arr;

    // console.log(pivotIndex,"CHECK")

}



console.log(quickSort(arr));


