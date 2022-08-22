//LEXICAL SCOPE - scope determined at compile time
//CLOSURE - ability to reference a variable in an enclosing scope
const globalScopeVariable = "global scope variable"
function functionOfFunctions() {
    let parentScopeVariable = "parent scope variable"
    childFunction()
    function childFunction() {
        const localVariable = "local variable"
        console.log(`I have access to the ${localVariable} and the ${parentScopeVariable} and the ${globalScopeVariable}`)
    }
}

functionOfFunctions()