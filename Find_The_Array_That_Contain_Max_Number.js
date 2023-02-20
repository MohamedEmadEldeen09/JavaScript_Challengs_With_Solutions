//Finding the array that contain the largest number and return it  

function largestOfFour(arr) {  
    let findMaxNumInSubArray = {}
    let a = arr.map((subArr , index)=>{      
    findMaxNumInSubArray[index] = Math.max(...subArr)  
    return Math.max(...subArr);
    })
    for (let key in Object.keys(findMaxNumInSubArray)) {      
        if(findMaxNumInSubArray[key] == Math.max(...a)){     
         return arr[key]
        }       
    }
   return  0
  } 
let maxa = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(maxa)
