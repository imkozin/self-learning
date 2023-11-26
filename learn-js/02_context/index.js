function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Ivan',
    age: 29,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd()
    }
}

const sasha = {
    name: 'Sasha',
    age: 23
}

// person.logInfo.bind(sasha, 'Manager', '89998765432')()

// person.logInfo.call(sasha, 'Manager', '89998765432')

person.logInfo.apply(sasha, ['Manager', '89998765432'])

const arr = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function(i) {
//         return n * i
//     })
// }

Array.prototype.multBy = function(n) {
   return this.map(function(i) {
        return n * i
    })
}

console.log(arr.multBy(20))