
{/*Problem 2 :-   Best time to buy and sell */}

function maxProfit(arr){

    let minPrice = Infinity
    let profit = 0;

    for(let i = 0; i < arr.length; i++){
  
        if(arr[i] < minPrice) minPrice = arr[i];
        if((arr[i] - minPrice ) > profit) profit = arr[i] - minPrice

    }


    return profit

}

{/*Problem 2 :-   Best time to buy and sell part 2 */}


function maxProfit2(arr){
    let profit = 0;

    for(let i = 0; i < arr.length; i++){
       //continue to hold stock if price i.e (i) is greater than (i-1). and sell if (i) - (i-1) = negative number
       if(arr[i] - arr[i-1] > 0) profit += arr[i] - arr[i-1];
       
    }

    return profit

}




console.log(maxProfit2([ 7, 1, 5, 3, 6, 4 ],"BUYSELL"))
