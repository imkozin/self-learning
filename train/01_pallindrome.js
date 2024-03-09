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

function reversedStr(string) {
    const res = []

    for (let i = string.length - 1; i >= 0; i--) {
        res.push(string[i])
    }
    return res.join('')
    // return string.split('').reverse().join('')
}

console.log(reversedStr('pizza'));