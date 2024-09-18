
let arr = [32,22,10,19,17];

// my solution
function selectionSort(arr){ 
    for(let x = 0; x <arr.length; x++){
        let min = x;
         for(let y = x+1; y <arr.length; y++){
             if(arr[min] > arr[y]){
                // storing index and not item itself.
                min = y
             }
         }
         if(arr[x] > arr[min] ){
            let temp = arr[min];
            arr[min] = arr[x];
            arr[x] = temp;
         }
    }
    return arr
}


// console.log(selectionSort(arr));



// lecture's sol:- 

 
// practice



    function selectionSort1 (arr){
        // console.log(arr,"ARR")
        for(let i =0; i< arr.length; i++){
            let min = i;
            for(let j = i+1; j < arr.length; j++){
                if(arr[min] > arr[j] ){
                    min = j
                }
            }
            if(arr[i] > arr[min]){
                let temp = arr[min];
                arr[min] = arr[i];
                arr[i]=temp;
            }
            console.log(arr[i], arr[min])

        }

        return arr
    }


// console.log(selectionSort1([4,1,3,9,7]))

function slectionSort2(arr){
    let min;

    for(let i =0; i < arr.length;i++){
        min = arr[i];
        for(let j = i +1; j < arr.length; j++){
            if(arr[min] > arr[j]){
                let temp= arr[j];
                arr[j] = arr[min];
                arr[min]= arr[temp]
            }
        }

        if(arr[i] > arr[min]){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }

    return arr
}

console.log(slectionSort2([ 6, 5,15, 4, 3,10, 2, 1]))