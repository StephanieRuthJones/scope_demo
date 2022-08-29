//SCOPE CHAIN - engine moves from innermost to outermost scope to find the variable

let firstNum = 1 

function printNumbers() {
    let secondNum = 2
    console.log("secondNum", secondNum)
    console.log("firstNum", firstNum)

    let thirdNum = 42
    console.log("thirdNum", thirdNum)
}

printNumbers()