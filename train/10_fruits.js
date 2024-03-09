const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']

function countFruits(fruits) {
    const res = {}

    for (let f of fruits) {
        if (!res[f]) {
            res[f] = 1
        } else {
            res[f] += 1
        }
    }

    return res
}

console.log(countFruits(fruits))

function uniqueFruits(fruits) {
    const res = []
    fruits.forEach((f) => {
        if (!res.includes(f)) {
            res.push(f)
        }
    })

    return res
}


function uniqueItems(fruits) {
    const unique = {}

    fruits.forEach(f => {
        unique[f] = true
    })

    return Object.keys(unique)
}

console.log(uniqueFruits(fruits));
console.log(uniqueItems(fruits));