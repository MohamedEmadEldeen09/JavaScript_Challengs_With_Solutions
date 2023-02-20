//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

/*
---------Repeat a String Repeat a String-----------
Repeat a given string str (first argument) for
num times (second argument). Return an empty string if num is not a positive
number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
    let text = ""
    for (let index = 0; index < num; index++) {
       text += str;       
    }
    return text;
  }
 console.log(repeatStringNumTimes("abc", 3));


