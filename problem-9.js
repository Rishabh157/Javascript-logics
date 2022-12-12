// Write a JavaScript program which accept a string as input and swap the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX


// 1.  Logic

function swapLetters(msg) {

    let newMsg = ""

    for (let i in msg) {

        let ascVal = msg[i].charCodeAt()

        if (ascVal >= 65 && ascVal <= 90) {

            let smallCase = ascVal + 32
            newMsg += String.fromCharCode(smallCase)

        } else if (ascVal >= 97 && ascVal <= 122) {

            let capitalCase = ascVal - 32
            newMsg += String.fromCharCode(capitalCase)

        } else {

            newMsg += String.fromCharCode(32)

        }
    }
    return newMsg
}

let ans = swapLetters("The grEat Power cOmes wIth Great respOnsibIlity ")
console.log(ans)
