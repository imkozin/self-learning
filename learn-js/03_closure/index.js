// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n);
//     }
// }

// const calc = createCalcFunction(42)
// console.log(calc);
// calc()

// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)

// console.log(addOne(41));
// console.log(addTen(28));

// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(ruUrl('yandex'));
// console.log(ruUrl('vkontakte'));
// console.log(comUrl('google'));
// console.log(comUrl('netflix'))

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Ivan', age: 29, job: 'Frontend'}
const person2 = {name: 'Sasha', age: 23, job: 'Manager'}

bind(person1, logPerson)()
bind(person2, logPerson)()

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}