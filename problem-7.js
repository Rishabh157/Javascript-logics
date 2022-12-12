// Write a JavaScript program to sort the items of an array.

// 1. logic

const sortedArray = (array) => {

    let result = array.sort((a, b) => {
        return a - b
    })
    return result
}

let array = [3, 8, 7, 6, 5, -4, 3, 2, 1]

let result = sortedArray(array)
console.log(result)
