console.log("Stacks Here");

/* 2390. Removing Stars From a String */

function removeStars(s) {
  console.log(s, "S_HERE");

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    console.log(s[i], "value");

    if (s[i] != "*") {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  console.log(stack, "STACKKK");

  return stack.join("");
}

// console.log()

// console.log(removeStars("leet**cod*e"), "RESULTTTT");

/* 735. Asteroid Collision */

/*
We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.



Approach :- 

 stack = [];
 



*/

// function asteroidCollision(asteroids) {
//   console.log(asteroids, "ASTEROIDSSSSS");
// }

// asteroidCollision([5, 10, -5]);

/*

394. Decode String

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"


approach :- 

we will start putting item when we find the close bracket, so when we see any ] , then we will take the string prior to it and then multiply it with the number 

*/

function decodeString(s) {
  console.log(s, "STRINGGG");

  const numStack = [];
  const varStack = [];

  for (let i = 0; i < s.length; i++) {
    if (Number(s[i])) {
      numStack.push(s[i]);
    } else {
      varStack.push(s[i]);
    }
  }

  console.log(numStack, varStack, "STACK_IN_PROGRESS");
}

decodeString("3[a]2[bc]");
