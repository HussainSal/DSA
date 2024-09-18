
// second smallest

function findSecondSmallest (nums){

    let minimum = Infinity;
    let secondMinimum = Infinity;

    for(let i=0; i < nums.length; i++){
        if(nums[i] < minimum){
            minimum = nums[i]
        }
    }

     for(let i=0; i < nums.length; i++){
        if(nums[i] != minimum && nums[i] < secondMinimum){
            secondMinimum = nums[i]
        }
    }

    return secondMinimum

}


// console.log('findSecondSmallest', findSecondSmallest([1,2,1,4,6]))


// Mahority element


function majorityElement (nums){

        		let majority = Math.ceil(nums.length/2)
                let fq1= {}
                for(let key of nums){
                    fq1[key] = (fq1[key] || 0 )+1
                }
            console.log(majority, fq1)

                for(let key in fq1){
         console.log(majority, fq1[key])

                    if(fq1[key] >= majority ){
                        return key;
                    }
                }
}

// Input: nums = [9,6,4,2,3,5,7,0,1] 
// Output: 8



function missingElement (nums){
    nums.sort();

    let low = 0;
    let high = nums.length -1;
    let mid;
    let ans = nums.length ;
    // [0,1,2,3,5,6]

    while(low <= high){
        mid = Math.floor((low+high)/2);
        console.log(`----------ITERATION_STARTED---------` )
        console.log(`mid :- ${mid}, low :- ${low}`,`high :- ${high}`, `numsMid :- ${nums[mid]}` )
        if(nums[mid] > mid){
            ans = mid;
            high = mid -1;
            console.log(`INSIDE == mid :- ${mid}, low :- ${low}`,`high :- ${high}` )

        }else{
            low = mid +1;
            console.log(`ELSEINSIDE == mid :- ${mid}, low :- ${low}`,`high :- ${high}` )

        }
    }
    return ans
}


function singleNumber (nums){
    
    let fq1 = {}

    for(let key of nums){
        fq1[key]= (fq1[key] || 0) +1
    }   

    console.log(fq1,"FQ1111")

    for(let key in fq1){
        console.log(fq1[key],"ROUTER")
        if(fq1[key] == 1){
            console.log("insideIF",q1[key] == 1)
            return key
        }
    }

    return -1
     
}

// merge sort

const merge = (arr1, arr2) =>{
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

const mergeSort = (arr) =>{

    if(arr.length == 1) return arr
    let mid = Math.floor(arr.length/2)
    let left =  mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    mergeSortRecursion(left,right);

}




// Find the pivot integer

{/* 
    Pseducode :- 

    1.divide a number and obtain mid.
    2.then check sum from 1 to mid , and then from mid to end.
    3. If sum from 1 to mid is smaller than mid to end, then increase mid 
    4. If sum from 1 to mid is larger than mid to end, then decrease mid 
    when both side sum is same , return ans otherwise return -1.

*/}

function pivotInteger(n){

  let  left = 1;
  let  right = n;
  let mid ;
  let totalSum =  Math.floor((n * (n+1))/2)
    while(left <= right ){
        mid = Math.floor((left+right)/2);
        let leftSideSum = Math.floor((mid * (mid+1))/2)
        {/*  RightSideSum :- 
        The idea here is to calculate the sum of integers from mid + 1 to n and add mid to it. Why is mid added? This is done because in the leftSideSum, you've included mid, so when calculating rightSideSum, you need to include it as well to ensure that both sides are symmetric.
    */}
        let rightSideSum = totalSum - leftSideSum +  mid
        
        console.log(`total:-${totalSum}`,`leftside:-${leftSideSum}`,`RightSideSum:-${rightSideSum}`, `mid :- ${mid}`)
       
        if(leftSideSum < rightSideSum){
            left = mid+1
        }else if(leftSideSum > rightSideSum){
            right = mid -1
        }else{
            return mid
        }
        mid = Math.floor(left+right/2);
    }

    return -1



}

{/* Number of good pairs */}
function goodPairs(nums){

    let countPair = 0;

    for(let i=0; i< nums.length -1; i++){
        for(let j =i+1; j < nums.length; j++){
            if(nums[i] == nums[j]&& i < j ){
                countPair++
            }
            console.log(`numsi :- ${nums[i]}, numsj :- ${nums[j]} countPair :- ${countPair}`)
        }
    }

    return countPair

}


{/* Count of Matches in Tournament 
    PsuedoCode :- 

    we will create a variable matches. we will run while loop untill n is equal to 1

    if n is even :-  matches :- n/2 , n = n/2
    if n is odd :-  matches :- (n-1)/2 , n = ((n-1)/2) +1


*/}


function countMatch(n){

    let matches = 0;

    while (n > 1){

        console.log(`OUTSIDE,n :-${n}, Matches :- ${matches} `)

        // even 

        if(n % 2 == 0){
            matches += Math.floor( n/2);
            n= Math.floor( n/2);
            console.log(`EVEN,n :-${n}, Matches :- ${matches} `)
        }else{
            matches += Math.floor((n-1)/2);
            n=  Math.floor((n-1)/2) +1;
            console.log(`ODD,n :-${n}, Matches :- ${matches} `)

        }
    }

    return matches

}


{/* 
    Move Zeros :- Explanation through Dry Run
    
    [1,0,0,3,12]

           i j
  1st :-  [0,1,0,3,12]  
     Swap i with j bcz at i we have 0 and at j we have 1. and then inc i and j

           i j
  2nd :-[1,0,0,3,12] , inc j

  Just inc j and not i bcz of no swap.

             i   j
   3rd :- [1,0,0,3,12]
    Swap i with j bcz at i we have 0 and at j we have 3. and then inc i and j

               i    j
   4th :- [1,3,0,0,12]

   Swap i with j bcz at i we have 0 and at j we have 3. and then inc i and j




   [1,0,0,3,12]
*/}
function moveZeroes(nums){
    let i = 0;
    let j = 0;
     while(j < nums.length){
        console.log(`OUTSIDE = numsJ :-${nums[j]},numsi :-${nums[i]}, nums:- ${nums}`)
        if(nums[j] != 0){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            console.log(`INSIDE = numsJ :-${nums[j]},numsi :-${nums[i]}, nums:- ${nums}`)
        }
        console.log(`BEFORE INC J =  numsJ :-${nums[j]},numsi :-${nums[i]}, nums:- ${nums}`)
        j++
     }

     return nums

}

{/* Sort colors */}

function bubleSort(nums)
{

    for(let i =nums.length; i >= 0; i--){
        for(let j = 0; j< i; j++){
            if(nums[j] > nums[j+1] ){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp
            }
        }
    }

    return nums
}

{/* Best time to buy and sell stock 
     [7,1,5,3,6,4] 

     :- finding the min price, and maximising the profit

     psudeocode :- 
     1.create a variable for profit, tempProfit and price , initialize price to max value of integer
     2. check if current date price is less than price , if so set the new price (This will contain min price)
     3. for tempProfit = find diff b/w current date price and price 
     4. if tempProfit is more than prodfit , set profit to tempProfit

*/}
function bestTimeToBuy(nums){
    let profit = 0;
    let tempProfit = 0;
    let price = Infinity;
    for(let i =0; i< nums.length; i++){
        if(nums[i] < price) price = nums[i];
        tempProfit = nums[i] - price;
        if(tempProfit > profit) profit = tempProfit
    }

    return profit
}


console.log('singleNumber',bestTimeToBuy([7,1,5,3,6,4]) )

