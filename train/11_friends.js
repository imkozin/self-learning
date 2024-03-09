const friends = [
    {name: 'alex', pizzas: ['cheese', 'pepperoni']},
    {name: 'mike', pizzas: ['salami', 'margarita']},
    {name: 'stas', pizzas: ['meat']},
    {name: 'anna', pizzas: ['tuna']}
]

const favPizzas = (friends) => {

    const pizzas = friends.reduce((acc, cur) => {
        return [...acc, ...cur.pizzas]
    }, [])    

    return pizzas
}

console.log(favPizzas(friends));