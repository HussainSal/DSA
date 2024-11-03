
//Leet code 75 :- https://leetcode.com/studyplan/leetcode-75/

/*
Problem 1 :- 1768. Merge Strings Alternately
*/


function mergeAlternately(word1,word2){

    const lengthy = word1?.length > word2?.length ? word1?.length : word2.length;
    let output = ""

    for(let i =0; i < lengthy; i++ ){
        
        if(word1[i]){
            output = `${output}${word1[i]}`
        }

        if(word2[i]){
            output = `${output}${word2[i]}`
        }
    }

    return output
}

// console.log(mergeAlternately("abcd","pq"),"MERGE_ALTERNATIVELY")


/* 
238. Product of Array Except Self

solution :- 

*/

function productArray (nums){
    console.log(nums,"NUMSS")
    let products = []
    for(let i =0;i<nums.length;i++){
        let temp = 1;
        for(let j = 0; j < nums.length ;j++){
            console.log(temp,"TEMPPP")
            if(i != j){
               temp = temp * nums[j];
            }
            console.log(temp,"TEMPPP_OUTSIDE")
        }
        products[i] = temp;   
    }
    return products
}

// optimizied silution 

function productArray(nums) {
    const n = nums.length;
    const leftProducts = new Array(n);
    const rightProducts = new Array(n);
    const products = new Array(n);

    // Step 1: Calculate left products
    leftProducts[0] = 1; // There are no elements to the left of the first element
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }

    // Step 2: Calculate right products
    rightProducts[n - 1] = 1; // There are no elements to the right of the last element
    for (let j = n - 2; j >= 0; j--) {
        rightProducts[j] = rightProducts[j + 1] * nums[j + 1];
    }

    // Step 3: Calculate the result
    for (let k = 0; k < n; k++) {
        products[k] = leftProducts[k] * rightProducts[k];
    }

    return products;
}


console.log(productArray([-1,1,0,-3,3]),"PRODUCT_ARRAY")