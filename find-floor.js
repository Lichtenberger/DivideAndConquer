//Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

function findFloor(arr, x) {
    for(let i = 0; i < arr.length;) {
      if(x < arr[i]) {
        return -1
      } else if(arr[i] < x) {
        i++
      } else if(arr[i] >= x) {
        let j = i - 1
        return arr[j]      
      } else {
        return arr[-1]
      }
    }
  }
  
  module.exports = findFloor