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

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6]
const sum = 10

function checkSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        const num1 = numbers[i]

        for (let j = i + 1; j < numbers.length; j++) {
            const num2 = numbers[j]

            if (num1 + num2 === target) {
                return [num1, num2]
            }
        }
    }

    return []
}

console.log(checkSum(myNumbers, sum));

const arr = [1, 2, 2, 4, 5, 6, 6]

function findSum(nums) {
    let sum = nums.reduce((acc, cur) => {
        return acc + cur
    }, 0)

    return sum
}

console.log(findSum(arr));