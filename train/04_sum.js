function sumDigits(number) {
    const num = Math.abs(number)
    const str = num.toString()
    const arr = str.split('')
    const res = arr.reduce((acc, cur) => {
        return Number(acc) + Number(cur)
    },0)
    return res
}

console.log(sumDigits(-32));
console.log(sumDigits(88))