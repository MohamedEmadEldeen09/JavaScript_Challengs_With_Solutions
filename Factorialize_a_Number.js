//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number


/*
 -----------------Factorialize a Number-------------------
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function
 */


function factorialize(num) {
    if(num == 1 || num == 0){return 1;}
    let f = num;
    for (let i = num-1; i >= 1; i--) {
          f *=i ;          
    }
    return f
  }
  console.log(factorialize(5))