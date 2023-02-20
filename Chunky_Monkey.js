//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

/*
 --------------Chunky Monkey------------------
Write a function that splits an array (first argument) into groups the
length of size (second argument) and returns them as a two-dimensional array.
*/



function chunkArrayInGroups(arr, size) {
    let answer = []
    let len = arr.length;
    while (len>0) {    
        answer.push(arr.splice(0,size))
        len = arr.length
    }
    return answer;
} 
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));