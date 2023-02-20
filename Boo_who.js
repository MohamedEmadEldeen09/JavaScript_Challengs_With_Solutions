//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who


// -----------Boo who-------
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.


function booWho(bool) {
    if(typeof bool == 'boolean'){return true}
    return false;
  }
console.log(booWho(null))