// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

// 1. logic

const getElementsOfParameter = function (array, num) {

    let newArr = []

    if (array.length === 0 && num < 0 || num > array.length) {
        return array
    } else if (num === undefined) {
        return array[0]
    } else {
        for (let i = 0; i < num; i++) {
            newArr.push(array[i])
        }
    }
    return newArr
}


let array = ["India", "Argentina", "Portgal", "France", "USA", "England"]

let result = getElementsOfParameter(array, 4)
console.log(result)
