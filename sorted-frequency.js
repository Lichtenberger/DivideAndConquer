// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

function sortedFrequency(arr, num) {
    let found = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            found += 1
        }
        console.log(i)
    }
    return found
}

module.exports = sortedFrequency