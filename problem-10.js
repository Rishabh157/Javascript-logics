
// Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.

// 1. logic 

let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i in arr) {

    console.log(`row ${i}`)

    for (let j in arr[i]) {
        console.log(arr[i][j])
    }

}


// 2.  logic

for (let i = 0; i < arr.length; i++) {

    console.log(`row ${i}`)

    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j])
    }
}
