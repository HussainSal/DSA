function factorial(n){
    // base case
    if(n == 1) return n;

    // recusive case
   return n * factorial(n -1)
}


// Problem 2 :- Pow(x, n)

// 2,4  = 2*2*2*2 = 16

// Input: x = 2.00000, n = 10
// Output: 1024.00000

function myPow(x,n){

// anything raise to the power 0 will return 1.
  if(n == 0) return 1;
  

  return x * myPow(x, n-1)


}
console.log("FACTORIAL", myPow(2,10))