/* 

String Comparison

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

 

Example 1:

Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
Example 2:

Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.
Example 3:

Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

*/

function compress(chars) {
  // creating 2 variable read and write
  let read = 0;
  let write = 0;

  while (read < chars.length) {
    let char = chars[read];
    let count = 0;

    // over here we are checking if current char is equal to the char at read index, if so we are increasing the read and checking again for continuos series and also inc the count.
    while (read < chars.length && char === chars[read]) {
      read++;
      count++;
    }

    // writing in actual array
    chars[write++] = char;

    // checking the count so that we know how many times does the number occured in continuation. if count is more than 1 then we will put it after the number
    if (count > 1) {
      // converting the count to number, reason :- if we have any number occuring 12 times, then question asked us to put it at as 2 diff elements eg for 'a' which occured 12 times :- ['a','1','2'] and not like this :- ['a','12']
      let countStr = count.toString();

      for (let i = 0; i < countStr.length; i++) {
        // writing the count in chars
        chars[write++] = countStr[i];
      }
    }
  }

  return chars;
}

compress(["a", "a", "b", "b", "c", "c", "c"]);
