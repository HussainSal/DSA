

function countUnique(nums){

	// Your code goes here

		let fq1 = {}
		let arr = []
		for(let key of nums){
			fq1[key] = (fq1[key] || 0 )+ 1
		}

		for(let key in fq1){
			arr.push(Number(key));
		}

		return arr

}

let arr = [1,1,1,1,2,2,5,6,8,8]

console.log('countUnique', countUnique(arr));


// Moving zeroes at the end.

function moveZeroes(nums){

    let i =0;
    let j= 0;

    while(j < nums.length){

        console.log("i:-" +i, "j:-" + j )
                console.log(nums, "BEFORE SWAPPED")

        if(nums[j] !== 0){
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp
            i++
        }

        
        j++
    }

    return nums



}


console.log(moveZeroes([0,1,0,3,12]),"MOVEZEROES")