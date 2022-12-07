
// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 


// 1. logic

const joinArrayElement = function (array) {
    let elements = array.join('-')
    return elements
}

let array = ["India", "Argentina", "Portgal", "France", "USA", "England"]

let result = joinArrayElement(array)
console.log(result)


// 2. logic

function joinArray(array, via) {
    let ele = ""

    if (via === undefined) {
        for (let i = 0; i < array.length; i++) {
            ele = ele + array[i] + ","
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            ele = ele + array[i] + via
        }
    }
    return ele
}

let ans = joinArray(array, "-")
console.log(ans)
