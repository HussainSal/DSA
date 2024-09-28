
//Leet code 75 :- https://leetcode.com/studyplan/leetcode-75/

/*
Problem 1 :- 1768. Merge Strings Alternately
*/


function mergeAlternately(word1,word2){

    const lengthy = word1?.length > word2?.length ? word1?.length : word2.length;
    let output = ""

    for(let i =0; i < lengthy; i++ ){
        
        if(word1[i]){
            output = `${output}${word1[i]}`
        }

        if(word2[i]){
            output = `${output}${word2[i]}`
        }
    }

    return output
}

// console.log(mergeAlternately("abcd","pq"),"MERGE_ALTERNATIVELY")

