//Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

function countZeroes(arr) {
    let start = arr.indexOf(0)
    console.log(start)
    if(start == -1) {
        return 0
    }
    return arr.length - start
}

module.exports = countZeroes