//SHADOWING

let global = "global"
// let anotherGlobal = "another global"
function someFunction() {
    let global = "shadowed variable" //shadow variable
    // anotherGlobal = "another global inside someFunction" //override variable
    console.log('global in someFunction', global)
    // console.log('anotherGlobal in someFunction', global)

}
console.log('global outside someFunction', global)
// console.log('anotherGlobal outside someFunction', global)

