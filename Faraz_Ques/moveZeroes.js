//4

// bruete force
// function moveZeroes(arr){

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == 0){

//             for(let j = 0; j < arr.length; j++){
//                 console.log(arr[i] , arr[j],arr, "OUTSIDE")
//                 if(arr[i] > arr[j]){
//                     [arr[i],arr[j]]=[arr[j],arr[i]] 
//                 console.log(arr[i] , arr[j],arr, "INSIDE")
    
//                 }
//             }
//         }
//     }

//      for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             console.log(arr[i] , arr[j],arr, "OUTSIDE")
//             if(arr[i] < arr[j] && arr[i] !== 0 && arr[j]!== 0){
//                 [arr[i],arr[j]]=[arr[j],arr[i]] 
//             console.log(arr[i] , arr[j],arr, "INSIDE")

//             }
//         }
//     }

//     return arr
// }


function moveZeroes(arr){
    let nonZero = 0 ;
    
    for(let i =0; i< arr.length;i++){
        //  console.log(arr,arr[nonZero],arr[i],`nonZero = ${nonZero}`,`i = ${i}`, "zero");

        if(arr[i] != 0){
        // console.log(arr,arr[nonZero],arr[i],`nonZero = ${nonZero}`,`i = ${i}`, "before");
             arr[nonZero++] = arr[i]
        // console.log(arr,arr[nonZero],arr[i],`nonZero = ${nonZero}`,`i = ${i}`, "after")
        }
    }

    while (nonZero < arr.length) arr[nonZero++] = 0
  

    return arr
}


console.log(moveZeroes([0,1,0,3,12]))