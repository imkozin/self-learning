// function removeDupes(str) {
//     const res = []
//     const map = {}

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i]

//         if (!map[char]) {
//             map[char] = true
//             res.push(char)
//         }
//     }

//     return res.join('')
// }

function removeDupes(str) {
  return Array.from(new Set(str)).join('')
}

console.log(removeDupes('abcd'));
console.log(removeDupes('aabbbccccddddd'))
console.log(removeDupes('adbccbda'))
console.log(removeDupes('abcdabcd'))
