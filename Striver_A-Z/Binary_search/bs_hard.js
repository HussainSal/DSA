
/* 
Problem 1 :- KOKO eating bananas

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30


Approach :- 

over here the range would be from 3 to 11. so l is 3 and e is 11. the per hour eating bananas is in this range . 



Step 1 :- calculate medium and check in how many hours can she finish all bananas. if she can finish all bananas and time is still less than hours then we may consider reducing the mid i.e reducing right . 

*/


function minEatingSpeed  (piles, h) {

    let start = piles[0];
    let end = piles[piles.length - 1];
    let tempSpeed = h;

    while(start <= end){
        

    }
}

console.log(minEatingSpeed( [3,6,7,11],8),"PILES_AND_HOUR")

