console.log("Problem Solving")


{/* Frequency Counter */}
function frequencyCounter(arr1,arr2){
    if(arr1.length != arr2.length) return false;

    let fq1 = {};
    let fq2 = {};

    // inserting value in fq1 obj
    for(let key of arr1){
        fq1[key] = (fq1[key] || 0 ) + 1
    }

    // inserting value in fq2 obj
    for(let key of arr2){
        fq2[key] = (fq2[key] || 0) + 1
    }

    console.log(fq1,fq2);

    for(let key in fq1){
        // checking frequency 
        if(fq2[key ** 2] !== fq1[key]){
            return false;
        }

        // checking whether key exist in fq2
        if(!(key ** 2 in fq2)){
            return false;
        }
    }

    return true


}

let arr1 = [1,2,3,4,4]

let arr2 = [1,4,9,16,16]

// console.log(frequencyCounter(arr1,arr2))

// Anagrams :- anagram is a word or name formed by rearranging the letters of another eg ;- cinema as iceman

function anagram(str1,str2){
if(str1.length !== str2.length) return false;

let fq1 = {}
let fq2 = {}

for (let key of str1){
    fq1[key] = (fq1[key] || 0) + 1
}

for(let key of str2){
    fq2[key] = (fq2[key] || 0) + 1
}

for (let key in fq1){
    if(fq1[key] !== fq2[key]){
        return false
    }
}

console.log(fq1,fq2 ,"FQ1")
return true





}


console.log(anagram("salman","namlas"))

{/* Multiple Pointers */}

// multiple pointers :- we uses two pointer and compare values.

//ques1 :- finding pair of numb that returns 0

function multiplePointers(arr){
    let start = 0;
    let end = arr.length -1

    while(start < end){
        if(arr[end] + arr[start] > 0 ){
            end--
        }else if(arr[end] + arr[start] < 0 ){
            start++
        }else {
            return [arr[start], arr[end] ]
        }
    }

}
// console.log(multiplePointers([-5,-3,-2,1,0,2,5]))


// ques2 :- count unique values using multiple pointers

// accepts a sorted array and return unique values

function countUnique(arr){
    if( arr.length = 0) return 0

    let i = 0;
    let j= 1;
    let uniqueArr = [arr[0]]

 //steps
 // 1.compare el at j with i
 // 2. if same then inc j
 // 3. if not, then inc i and replace it with j and then inc j
 // 4. return i

    while( j < arr.length ){
        // console.log(arr[i],arr[j])
        if(arr[i] === arr[j]){
            j++
        } else if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j];
            uniqueArr.push(arr[i])
            j++
        }
    }
    // return i + 1
    return {count :i +1 ,arr: uniqueArr}

}


// console.log(countUnique([1,2,3,4,4,4,7,7,12,13]),"COUNTUN")


// 3d pattern :- Sliding window pattern

const arr = [1,2,5,2,8,1,5]

function maxSubarraySum (arr,num){
    if(arr.length < num) return

     
    let max = -Infinity
    for(let i = 0; i < arr.length - num +1; i++){
        console.log(arr[i],"ARRAYY")
        // for()

    }


}


console.log(maxSubarraySum(arr,4),"Sliding Window")

// it could be used for subarrays ques eg :- finding longest subarray with unique values or longes subarray sum etc.


// ques1 :- Finding sum of n consecutive elements in the array.





























// 4th pattern = Divide and conquer 
// This pattern involves dividing a data set into smaller chunks and then repearing a process with a subset of data

// This pttern can decrease time complexity

// 4th 


