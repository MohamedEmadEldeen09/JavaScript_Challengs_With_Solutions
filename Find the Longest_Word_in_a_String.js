//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

/*
-------------------Find the Longest Word in a String-----------------------
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/


function findLongestWordLength(str) {  
    let arr = str.split(" ").map((s)=>{ 
      return s.length
   });   
     return Math.max(...arr)
   }
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
