// 3. Написать функцию, которая суммирует все цифры одного числа до того момента, пока не будет получено однозначное число.

function getSum(num) {
    const arr = num.toString().split('')
    const res = arr.reduce((acc, cur) => {
        return Number(acc) + Number(cur)
    })
    if (res < 9) {
        return res
    }
    return getSum(res)
}

// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

console.log(getSum(493193))