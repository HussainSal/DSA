
function anaa(s,p){
    const result = [];
  
    // Create character frequency maps for both strings
    const pMap = new Map();
    const sMap = new Map();
    
    for (let char of p) {
      pMap.set(char, (pMap.get(char) || 0) + 1);
    }

    console.log(pMap,sMap,"MAPPP")
    
    // Initialize the sliding window
    let left = 0;
    let right = 0;
    let matchCount = 0; // Count of characters that match p
    
    // Slide the window
    while (right < s.length) {
      const charRight = s[right];
      
      // Increment the count of character from s in the sMap
      sMap.set(charRight, (sMap.get(charRight) || 0) + 1);
      
      // Check if the character in sMap matches the frequency in pMap
      if (sMap.get(charRight) === pMap.get(charRight)) {
        matchCount++;
      }
      
      // If the window size is equal to p's length
      if (right - left + 1 === p.length) {
        // If all characters match, add the left index to result
        if (matchCount === pMap.size) {
          result.push(left);
        }
        
        const charLeft = s[left];
        
        // Move the left side of the window
        if (sMap.get(charLeft) === pMap.get(charLeft)) {
          matchCount--;
        }
        sMap.set(charLeft, sMap.get(charLeft) - 1);
        if (sMap.get(charLeft) === 0) {
          sMap.delete(charLeft);
        }
        
        left++;
      }
      
      right++;
    }
    
    return result;

}

// Input: s = "cbaebabacd", p = "abc" 
// Output: [0,6]

{/**

we can solve that using sliding window pattern

create a window which goes upto k , which will intially store first k elemnts

then run a loop which start from k and goes upto arr.length, using sliding window we will add element at [i] and subtract[i-k]

Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
*/}



function findThreshold (arr, k, threshold){

   
    let sum = 0;
    let count = 0;


    for(let i=0; i< k ; i++){
        // small.push(arr[i])
        sum += arr[i] 
    }
    console.log(sum,"SMALL")

    for(let i=k; i< arr.length; i++){

        console.log(sum , arr[i], arr[i-k], sum+arr[i] - arr[i-k],"ADDITION CHECK")
       
        if(sum/k >= threshold)  count++
        sum = sum+arr[i] - arr[i-k]
        console.log( sum,`${i} index :- ${arr[i]}`,`${i-k} subtracted index :- ${arr[i-k]}`,(sum/k),sum,k,threshold,(sum/k) >= threshold,"SUMMM")

    }
    return count


}


{/*
  * Longest Repeating Character Replacement

Input: s = "ABAB", k = 2 
Output: 4
Input: s = "AABABBA", k = 1 
Output: 4

Psuedocode :- 

1. create a variable count, max and pass which will store k
2. loop and inc count if i == i + next iteration ...
3. If prv i is not euqal to i+1 iteration use pass (if pass is not 0) , inc the count.
4. If prv i is not euqal to i+1 iteration and pass is 0 don't inc the count
5. check max and count and the return the maxiumum value

 */}

function longestRepeating(s,k){
let count = 0;
let max = 0;
let pass = k;
let j = 0


let fq1 = {}

for(let key of s){
    fq1[key] = (fq1[key] || 0) + 1 
}


let changeTo ;
let temp = 0;
for(let key in fq1){
    if(fq1[key] > temp ){
        changeTo = key;
        temp = fq1[key] 
    }
}

console.log(fq1,changeTo,"FREQUENCYYY")


for(let i =1; i< s.length; i++ ){
    console.log(`i${i} :-${s[i]}`,`j${j} :-${s[j]}`, "condition match")


    if(s[i] == s[j] ){
        count++
        j++
        console.log(count, "condition match")
    }else if(s[i] != s[j] && pass > 0 ){

        pass--;
        count++
        j++
        s[i] = changeTo
        console.log(count,pass,s[i],changeTo,"condition match escape")

    }else{
        count = 0;
        console.log(count,pass,"condition set to 0")
    }
    console.log(max,count)
    max = Math.max(max,count);


}

console.log(max,"MAX")
return max;


}

console.log(longestRepeating("AABABBA",1))