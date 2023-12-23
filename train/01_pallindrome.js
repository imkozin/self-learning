// function isPalindrome(string) {
//     const arr = string.split('')
//     const reversedArr = arr.reverse();
//     const resultStr = reversedArr.join('');
//     const res = string === resultStr
//     return res
// }

function isPalindrome(string) {
    return string === string.split('').reverse().join('')   
}

console.log(isPalindrome('шалаш'));