

// console.log(3  ** 2,10 ** 2, 4 ** 2, )
// [-4,-1,0,3,10]

function sortedSquares(arr){
    let min;


    for(let i =0; i < arr.length; i++){
        arr[i] = arr[i] ** 2
    }

    for(let i = 0; i < arr.length; i++){
        min = i;
        for(let j = i +1; j< arr.length; j++){
            if(arr[min] > arr[j]){
                min = j
            }
        }

        if(arr[i] > arr[min]){
            [arr[min],arr[i]] = [arr[i],arr[min]]
        }

    }



    return arr

}

console.log(sortedSquares([-4,1,0,100,10]));

