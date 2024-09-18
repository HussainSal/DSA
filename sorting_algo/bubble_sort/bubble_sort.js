console.log("Hello bubble");


function noswapsswap(arr, ind1, ind2){
    [arr[ind1],arr[ind2]]= [arr[ind2], arr[ind1]]
}

function bubbleSort(arr){
 
    for(let i = 0; i <= arr.length; i++ ){
        for(let j = 0; j < arr.length;j++){
            if(arr[j] > arr[j+1]  ){
                // swap(arr,j,j+1)
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= temp
            }
        }

    }

    return arr

}

// optimized version for bubble sort

function optimizedBubble(arr){
    // for(let i = arr)
    for(let i = arr.length; i > 0; i -- ){
        for(let j = 0; j < i -1; j++){
            if(arr[j] > arr[j+1] ){
                // swap(arr, j,j+1)
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp
            }
        }
    }

    return arr
}

// perfect optimized version for bubble sort 
function perfectOptimizedBubblseSort(arr){

    let noswaps ;

    for(let i = arr.length; i >= 0; i--){
        noswaps = true
        for(let j= 0; j < i -1; j++){
            console.log(`J = ${arr[j]}`,`J+1 = ${arr[j+1]},`,"TARGET");
            if(arr[j] > arr[j+1]){
                noswaps = false
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
        if(noswaps){
            break
        }
    }

    return arr

}



function practiseOptimizedSort(arr){
    let noSwap = true;
    for(let i = arr.length; i >= 0; i --){
        noSwap = true;
        console.log(arr[i],"checking")
        for(let j = 0; j < i-1; j++){
            console.log(arr,"PPP");

            if(arr[j] > arr[j+1]){
                noSwap = false
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }

            console.log(arr,"QQQ");
        }
        if(noSwap){
            break
        }
    }
    return arr
}

function Bubbs(arr){
    let swap = true;
    for(let i = arr.length -1; i >= 0; i--){
        swap = true;
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                swap = false
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp
            }

        }
        if(swap) break
    }
    return arr

}


// console.log(perfectOptimizedBubblseSort([8,96,2,45,4,5,6,7]),"SASSSS")



function catchTheif(arr,k){

    let thief = 0;
    for(let i = 0; i < arr.length; i++ ){
        console.log(arr[i])
        if(arr[i] == "P"){
            console.log(arr[i])
            for(let j = 0 ; j <= k ; j++){
                console.log(arr[i],arr[j])
                if(arr[j] == "T"){
                    thief++

                    console.log(i,j,"THIEF")
                    break
                } 
            }
        }
    }




    return thief;

}


function merge(arr1,arr2){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]  ){
            result.push(arr1[i]);
            i++
        }else{
            result.push(arr2[j]);
            j++
        } 

        while(i < arr1.length){
            result.push(arr1[i])
            i++
        }


        while(j< arr2.length){
            result.push(arr2[j])
            j++
        }

        return result

    }

}

function mergeRecursively (arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeRecursively(arr.slice(0,mid))
    let right = mergeRecursively(arr.slice(mid))
    return merge(left,right)

}   



// function trialSort(nums){

//        let fq1 = {},arr=[]

//         for(let i of nums){
//             fq1[i] = (fq1[i] || 0 ) + 1
//         }

//         for(let key in fq1){
//             arr.push(Number(key))
//         }

//         console.log(arr,"ARRAY")

//         // const merged = mergeRecursively(arr);


//         //  console.log(merged,"ARRAY")


//         return arr[1];

// }


function uniqueArr (nums){
    		let fq1 = {}
		let arr = []
		for(let key of nums){
            console.log('key', key)
			fq1[key] = (fq1[key] || 0 )+ 1
		}

		for(let key in fq1){
            console.log('key', key)
			arr.push(key);
		}

        console.log('fq1', fq1)
		return arr

}



console.log("CHEKKK")

console.log(uniqueArr([89,23,45,5, 1, 4, 6, 6]), "SORTINGGG")


































