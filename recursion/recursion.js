// recursion by Fairaz

// Lecture 2
// ques :- write a func to find factorial of a number
function addRecursion(str){

    //base case
     if(str <= 0) return 1 ;

     return str *  addRecursion(str - 1)

}


console.log(addRecursion(3))

// Lecture 3

// If you have used recursion in solution it will take some space bczz function will called simultaneously and memory will be allocated for it. so if we are using it in any of the array methods i.e merge sort , we don't say space/time complexity to be constant bcz recusrion will also occupy some space.


// lecture 4
// fibonaci series : 1 1 2 3 5 8 , find nth term for fibonacci series.

 // formula : n -2 + n -1 = n
 
 // ques :- F(n) = F(n-2) + F(n-1) ,
 //          where F(1) = F(2) = 1 . find nth term

 function fibonaciRecursion(n){
    if(n = 1) return 1;
    if(n =2) return 1;
    let fn1 = fibonaciRecursion(n-1);
        let fn2 = fibonaciRecursion(n-2);

        return fn1 + fn2

    
 }


 // Lecture 49 :-  helper method recursion

 {/* 

 1. Helper method function we have 2 function , we have our main function and then inside we have a helper function which calls itself recursively. 

*/}


function collectOdds(nums){
    let result =[]


    function helperFunction(arr){

        if(arr.length == 0) return 

        if(arr[0] % 2 !== 0) result.push(arr[0]);
        
        
          helperFunction(arr.slice(1));
    }

    helperFunction(nums);

    return result



}

// console.log(collectOdds([1,2,3,4,5,6,7,8,9]),"STARTTTTT")


 // Lecture 50 :-  Pure recursion


 {/* 

 1.  in this we will not be using any helper function inside out main function . It is pure recursion

*/}

function collectOddValPure(arr){

    let newArr = [];

    if(arr.length == 0){
        return newArr
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValPure(arr.splice(1)));

    return newArr

}

console.log(collectOddValPure([1,2,3,4,5,6,7,8,9]),"STARTTTTT")
