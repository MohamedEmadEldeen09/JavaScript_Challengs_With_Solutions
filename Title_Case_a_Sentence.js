//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

/*
-----------Title Case a Sentence------------
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize
connecting words like the and of.
*/

function titleCase(str) {
    let arr = str.split(" ");
    let answer = []
    for (let i = 0; i < arr.length; i++) {  
     let text = arr[i][0].toUpperCase() 
     for (let j = 1; j < arr[i].length; j++) {
      text+=arr[i][j].toLowerCase()    
     }
     answer.push(text);
    }
    return answer.join(" ");
   }
 console.log(titleCase("I'm a little tea pot"))