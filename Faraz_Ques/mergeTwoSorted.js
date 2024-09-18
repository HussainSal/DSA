
{/*Problem 3 :-   Merge sorted array  */}

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

function mergeTwoSortedArrays(arr1,m,arr2,n){
    let i = m -1;
    let j = n -1;
    let k = m+n -1;

    while(i >= 0 && j >= 0 ){
        if(arr2[j] > arr1[i]){
            arr1[k] = arr2[j]
            j--
            k--
        }else {
            arr1[k] = arr1[i]
            i--
            k--
        }
    }
    
    while(i >= 0){
        arr1[k] = arr1[i]
        k--;
        i--;
    }

     while(j >= 0){
        arr1[k] = arr2[j]
        k--;
        j--;
     }

     return arr1
}


console.log(mergeTwoSortedArrays([1,2,3,0,0,0],3,[2,5,6],3),"TESTBRO")