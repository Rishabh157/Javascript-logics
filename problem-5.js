// Write a JavaScript function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array


const getLastElement = (array, ind) => {

    let newarr = []

    if (ind === undefined) {
        let len = array.length - 1
        return array[len]
    } else if (ind < 0) {
        return array
    } else {
        for (let i = 1; i <= ind; i++) {
            let lenOfArr = array.length - i
            newarr.unshift(array[lenOfArr])
        }
    }
    return newarr
}

let array = [2, 1, 7, 3, 8, 10]

let ans = getLastElement(array, 5)
console.log(ans)
