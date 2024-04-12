//Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

function findRotationCount(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i + 1])
   return i + 1
  }
  return 0
} 

module.exports = findRotationCount