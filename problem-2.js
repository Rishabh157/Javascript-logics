// Write a JavaScript function to clone an array

// 1. logic

const copyOfArrayWithJsMethods = function (array) {
    let cloneArray = array.slice(0)
    return cloneArray
}

let arr = ["india", "America", "Caneda", "New-York", "Norway"]

let array = copyOfArrayWithJsMethods(arr)
console.log(array)


// 2. logic

const cloneArrayWithLogic = function (array) {

    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i]
    }
    return newArray
}

let arrayOfCountries = ["india", "America", "Caneda", "New-York", "Norway"]

let cloneArray = cloneArrayWithLogic(arrayOfCountries)
console.log(cloneArray)

// 3. logic

const cloneWittSpreadOp = function(array){
    let cpArr = [...array]
    return cpArr;
}

let result = cloneWittSpreadOp(arrayOfCountries)

console.log(result)
