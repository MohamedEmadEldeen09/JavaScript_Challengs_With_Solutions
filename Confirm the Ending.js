//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

/*

-----------Confirm the Ending----------
Check if a string (first argument, str) ends with 
the given target string (second argument, target).

This challenge can be solved with the .endsWith() method,
which was introduced in ES2015. But for the purpose of this challenge,
we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
  
    let len = target.length; 
    let st = str.slice(str.length- len , str.length)
    console.log(st)
    if(st == target){
        return true
    }
    return false
  }
console.log(confirmEnding("Bastian", "n"))