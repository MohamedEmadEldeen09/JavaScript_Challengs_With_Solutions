//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer


/*
----------Falsy Bouncer---------
Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) { 
    return arr.filter((elem)=>{
        if(Boolean(elem)){
            return elem
        }     
    });
  } 
console.log( bouncer([7, "ate", "", false, 9]))