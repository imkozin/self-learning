function removeWord(str) {
    let result = []
    let arr = str.split(' ')
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            result.push(arr[i])
        }
    }

    return result.join(' ')
}


// console.log(removeWord('Привет мир мир мир Привет мир мир мир'));

    
const items = [{ price: 40 }, { price: -120 }, { price: '505' }, { price: 350 }]

const calculateTotal = (goods) => {
    let total = 0

    for (const item of goods) {
        const {price} = item
        if (typeof price === 'number' && price > 0) {
            total += price
        } 
    }

    return total
}

// console.log(calculateTotal(items));

const purchase = {
    Electronics : [
        {name: 'Laptop', price: 1500},
        {name: 'Keyboard', price: 100},
        {name: 'Mouse', price: 50}
    ],
    Textile: [
        {name: 'Bag', price: 50},
        {name: 'Mouse pad', price: 15}
    ]
}

