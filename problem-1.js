// Write a JavaScript function to check whether an `input` is an array or not.


// 1.  logic

const isArray = function (array) {
    if (!Array.isArray(array)) return false
    return true
}

let testArr = []

let result = isArray(testArr)
console.log(result)

// ----------------------------------------------------------
// 2. logic


const isArrayViaAnotherMethod = function (array) {
    let result = toString.call(array) === "[object Array]" ? true : false
    return result
}

let arr = []

console.log(isArrayViaAnotherMethod(arr))
