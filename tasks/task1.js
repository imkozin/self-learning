// function isUnique(string) {
//     for (let i = 0; i < string.length; i++) {
//         const char = string[i]

//         if (string.lastIndexOf(char) !== i) {
//             return false
//         }
//     }

//     return true
// }

// function isUnique(string) {
//     const set = new Set()

//     for (let i = 0; i < string.length; i++) {
//         const char = string[i]

//         if (set.has(char)) {
//             return false
//         }

//         set.add(char)
//     }

//     return true
// }

function isUnique(string) {
    return new Set(string).size === string.length    
}

console.log(isUnique('abcdef'));
console.log(isUnique('1234567'));
console.log(isUnique('abcABC'));
console.log(isUnique('abcadef'))