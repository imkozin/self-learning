const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'э', 'е', 'и', 'ы']

const findVowels = (str) => {
    const arr = str.split('')
    let total = 0;

    for (let i of arr) {
        if (vowels.includes(i)) {
            total++
        }
    }
    return total

}

// console.log(findVowels('галактика'));

function stringChanger(str) {
    const arr = str.toLowerCase().split('')
    let res = ''

    for (let i of arr) {
        if (vowels.includes(i)) {
            res += i.toUpperCase()
        } else {
            res += i.toLowerCase()
        }
    }

    return res
    
}

console.log(stringChanger('Привет Мир'))
console.log(stringChanger('Азбука Вкуса')) 