console.log('BINARY SEARCH')

function binarySearch (nums, target) {

    let left =0;
    let right = nums.length -1;
    while(left <= right ){
        let mid = Math.floor((left+right)/2);

        if( nums[mid] == target){
            return mid
        } else if(nums[mid] < target){
            left = mid +1;
        }else {
            right = mid -1
        }
    }
    return -1
}





console.log(binarySearch([-1,0,3,5,9,12], 9),"BINARY_SEARCH")


// Floor in sorted array :- 

function FloorInSortedArr (arr,x){

    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        
    }

}

console.log(FloorInSortedArr([1,2,8,10,11,12,19],5))

