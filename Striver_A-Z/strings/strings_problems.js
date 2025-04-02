console.log("Strings");

/*
Example 1:

Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
Example 2:

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
Example 3:

Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
*/

function removeOuterParentheses(str) {
  console.log(str, "STRINGGG");

  let balance = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      if (balance > 0) {
        result += str[i];
      }
      balance++;
    } else if (str[i] == ")") {
      balance--;

      if (balance) {
        result += str[i];
      }
    }
  }

  console.log(result, "stack");

  return result;
}

// removeOuterParentheses("(()())(())(()(()))");

function reverseWords(s) {
  s.split(" ");
  s.trim("");
  let arr = s.split(" ");
  console.log(s, "S_HERE");
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
    let temp = arr[i];
    arr[i] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }

  let str = arr.join(" ");
  return str;
  // let words = [];
}

// reverseWords("the sky is blue");

/*
1903. Largest Odd Number in String
eg :- 35428
Approach :- 35428 , this number is even, so we will remove 8, num becomes 3542 , then we remove 2, then 4 , then we get biggest odd number i.e 35  

get the last digit of number, check if it is odd, if so return the number if not remove that and look for next number .

*/

function largestOddNumber(num) {
  let str = "";
  let counter = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    console.log(num[i], "NUMSS_CHECK", num[i] % 2);
    if (num[i] % 2 !== 0) {
      counter++;
      return num.slice(0, i + 1);
    }
  }

  console.log(num, "FINAALLL");
  return counter == 0 ? "" : num;
}

// console.log(largestOddNumber("35427"));

/*
14. Longest Common Prefix

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""

Explanation: There is no common prefix among the input strings.

Approach :- 

step 1 :- Iterate over the array,
step 2 :- Store the entire first element in result variable
step 3 :- 



*/

function longestCommonPrefix(str) {
  console.log(str, "STRINGGGGG");

  let result = str[0].split("");
  // let obj = {};

  for (let i = 1; i < str.length; i++) {
    let current = str[i].split("");
    console.log(current, "CURRENT_HERE");
    for (let j = 0; j < current.length; j++) {
      console.log(str[i][j], result[j], "ANOTHER_WANNABE");
      if (str[i][j] != result[j]) {
        console.log("INSIDE");
        result.splice(result.length - 2, 1);
      }
    }
    console.log(result, "AFTER_ITERATION");
  }

  console.log(result, "FINAL");

  return result;
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

/*
  Approach :- 

  obj1 :- 
  
*/

function isIsomorphic(s, t) {
  // If the strings have different lengths, they can't be isomorphic
  if (s.length !== t.length) {
    return false;
  }

  // Create two maps for the character mappings
  let mapS = new Map();
  let mapT = new Map();

  // Iterate over both strings
  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    // Check if the character from s has been mapped to a different character in t
    if (mapS.has(charS)) {
      if (mapS.get(charS) !== charT) {
        return false; // Inconsistent mapping found
      }
    } else {
      mapS.set(charS, charT); // Map the character from s to t
    }

    // Check if the character from t has been mapped to a different character in s
    if (mapT.has(charT)) {
      if (mapT.get(charT) !== charS) {
        return false; // Inconsistent mapping found
      }
    } else {
      mapT.set(charT, charS); // Map the character from t to s
    }
  }

  // If no inconsistencies found, the strings are isomorphic
  return true;
}

// console.log(isIsomorphic("bbbaaaba", "aaabbbba"));

/*
Approach :- 

we will take first character of s i.e a and move it next to e --> "bcdea" --> "cdeab"
now in next iteration s becomes goal, after each character movement we will compare it with goal.

*/

function rotateString(s, goal) {
  let length = s.length;

  // If the length of s and goal are not the same, they can never be equal after rotations.
  if (s.length !== goal.length) {
    return false;
  }

  // Check for all possible rotations of s
  for (let i = 0; i < length; i++) {
    if (s === goal) {
      return true;
    }
    // Rotate the string by moving the first character to the end
    s = s.slice(1) + s[0];
  }

  return false;
}

// console.log(rotateString("abcde", "cdeab"));

/*
Valid Anagram

*/

function isAnagram(s, t) {
  let fq1 = {};
  let fq2 = {};

  for (let key of s) {
    fq1[key] = (fq1[key] || 0) + 1;
  }

  for (let key of t) {
    fq2[key] = (fq2[key] || 0) + 1;
  }

  for (let key in fq1) {
    if (fq1[key] != fq2[key]) {
      return false;
    }

    if (Object.keys(fq1).length != Object.keys(fq2).length) {
      return false;
    }
  }

  return true;
}

// console.log(isAnagram("anagram", "nagaram"));

/*
Approach :- 
         
Input :- tree,
Output :- eert



*/

function frequencySort(s) {
  // creating object for mapping
  let fq1 = {};

  // mapping
  for (let key of s) {
    fq1[key] = (fq1[key] || 0) + 1;
  }

  // getting array for fq1, so that we get the value and key
  let frequencyArray = Object.entries(fq1);

  //Sorting it, first compareing frequency which is at 1 index, then moving and comparing character if frequency is same like a,b
  frequencyArray.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    }
    return a[0].localeCompare(b[0]);
  });

  let sortedStr = "";

  // now, once we have sorted subarrays with dec order frequencies at index 1 for each subarray. we will access the alphabet which is at 0 index for each subarray.
  for (let i = 0; i < frequencyArray?.length; i++) {
    for (let j = 0; j < frequencyArray[i][1]; j++) {
      // adding alphabet in sortedStr.
      sortedStr += frequencyArray[i][0];
    }
  }

  // returning sorted string
  return sortedStr;
}

// console.log(frequencySort("cccaaa"));

/* 

1614. Maximum Nesting Depth of the Parentheses

s= "(1+(2*3)+((8)/4))+1"

approach :- 
  I will create a variable for keeping track of opening parenthesis


*/

function maxDepth(s) {
  let tempCount = 0,
    maxCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      tempCount++;
    } else if (s[i] == ")") {
      tempCount--;
    }

    if (tempCount >= maxCount) maxCount = tempCount;
  }

  return maxCount;
}

// console.log(maxDepth("(1)+((2))+(((3)))"));

let objRoman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s) {
  // Step 1: Define the mapping for Roman numerals to integers
  let objRoman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let counter = 0;

  // Step 2: Iterate through the string, checking each character and the next one
  for (let i = 0; i < s.length - 1; i++) {
    // If current character value is smaller than the next one, subtract it
    if (objRoman[s[i]] < objRoman[s[i + 1]]) {
      counter -= objRoman[s[i]];
    } else {
      // Otherwise, add the current character's value
      counter += objRoman[s[i]];
    }
  }

  // Step 3: Add the value of the last character (since it's not handled in the loop)
  counter += objRoman[s[s.length - 1]];

  return counter;
}

// console.log(romanToInt("MCMXCIV"));

/* 
Approach :- Longest Palindromic Substring

*/

// Helper function to check if a string is a palindrome
function longestPalindromeHelper(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Bruteforce Approach
function longestPalindrome(s) {
  for (let start = 0; start < s.length; start++) {
    for (let end = start + 1; end <= s.length; end++) {
      let substring = s.slice(start, end);
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }

  return longest;
}

// Optimized approach
function longestPalindrome(str) {
  if (s.length < 1) return "";

  let longest = "";

  // Helper function to expand around the center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right); // Return the palindromic substring
  }

  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindrome centered at i
    let palindrome1 = expandAroundCenter(i, i);
    // Check for even-length palindrome centered at i and i+1
    let palindrome2 = expandAroundCenter(i, i + 1);

    // Get the longer palindrome
    let longer =
      palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;

    // Update the longest palindrome
    if (longer.length > longest.length) {
      longest = longer;
    }
  }

  return longest;
}

console.log(longestPalindrome("babad"));
