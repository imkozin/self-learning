// Задание.
// 1. Напишите функцию, которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными числами.
const myArr = ['Jack', 10, 'John', 4, 'Marc', 28, -1, -5]

const getPositiveNumbers = (arr) => {
    const filteredArr = arr.filter(el => typeof el === 'number' && el > 0)

    return filteredArr
}

console.log(getPositiveNumbers(myArr));

// 2.  Напишите функцию accum:

const accum = (str) => {
    if (typeof str !== 'string') {
        return 'Provide a valid string'
    }

    let newArr = str.split('').map((char, index) => {
        return char.toUpperCase() + char.toLowerCase().repeat(index)
    })
    return newArr.join('-')
}

console.log(accum('abcd'))
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


// 3.  Напишите функцию, которая выдаёт сумму выручку на основании входного формата данных
const products = [
  { name: 'Футболка', price: 20, quantity: 2 },
  { name: 'Джинсы', price: 50, quantity: 1 },
  { name: 'Носки', price: 5, quantity: 10 },
  { name: 'Штаны', price: 30, quantity: 1 }
];

const countSum = (products) => {
    let total = 0;

    for (let i in products) {
        total += products[i].price * products[i].quantity
    }
    return total
} 

console.log(countSum(products))

