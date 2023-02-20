//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

/*
----------------Reverse a String-----------------
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
*/


function reverseString(str) {
    let arr = str.split("");  
    let text=""
     for(let x = arr.length-1 ; x>=0 ; x--){
       text += arr[x]  
    }
    return text;
}
console.log(reverseString("hello"))