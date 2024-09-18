console.log("Merge Sort")

// lecture 88 :- merging part of merge sort function for mixing two sorted arrays

// function for merging two arrays 
function merge(arr1,arr2){
    let results = [];
    let i = 0;
    let j = 0;
    
    while(i < arr1.length && j < arr2.length ){
        if(arr1[i] > arr2[j] ){
            results.push(arr2[j])
            j++
        }else {
            results.push(arr1[i])
            i++
        }
    }

    while(i < arr1.length){
        results.push(arr1[i])
        i ++
    }

    while(j < arr2.length){
        results.push(arr2[j])
        j ++
    }

    return results;
}

// console.log(merge([1,10,50],[2,14,99,100]), )

// lecture 89 :- sorting part of merge sort

// recursively calling function for breaking and merging arrays
function mergeSortRecursion(arr){
    
    // calling merge sort recursively
    if(arr.length <= 1) return arr; // base case
    let mid =  Math.floor(arr.length/2);
    let left =  mergeSortRecursion(arr.slice(0,mid)); // calling mergeSortRecursion on left recursively
    let right = mergeSortRecursion(arr.slice(mid));
    return merge(left,right);   

}

// calling merge sort = 

console.log(mergeSortRecursion([10,24,76,73]))

