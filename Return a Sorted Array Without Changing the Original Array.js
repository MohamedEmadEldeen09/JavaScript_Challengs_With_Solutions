//---------Return a Sorted Array Without Changing the Original Array-------
/*
se the sort method in the nonMutatingSort function to sort the elements of
 an array in ascending order. The function 
should return a new array, and not mutate the globalArray variable.
*/

const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
   return arr.slice(0 , arr.length).sort((a,b)=>a-b)
}
console.log(globalArray)
console.log(nonMutatingSort(globalArray))
console.log(globalArray)
