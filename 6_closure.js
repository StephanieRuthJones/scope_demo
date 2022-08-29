//CLOSURE - ability to reference a variable in an enclosing scope
const globalScopeVariable = "global scope variable"
function functionOfFunctions() {
    let parentScopeVariable = "parent scope variable"
    
    return function () {
        const localVariable = "local variable"
        console.log(`I have access to the \n${localVariable} \nand the ${parentScopeVariable} \nand the ${globalScopeVariable}`)
    }
    
}

const childFunction = functionOfFunctions()
childFunction()