
// using frequency counter
function uniqueArr(arr){

    let fq1 = {};
    let uniqueArr = [];

    for(let key of arr){
        fq1[key] = (fq1[key] +1) || 1
    }

    for(let key in fq1){
        // uniqueIndx++
        uniqueArr.push(Number(key))
    }

    console.log('fq1', uniqueArr,fq1)

    return uniqueArr
}

console.log(uniqueArr([1,1,2]))