const person = new Object({
  name: 'Maxim',
  age: 25,
  greet: function () {
    console.log('Greet!')
  },
})

Object.prototype.sayHello = function() {
    console.log('Hello!');
}

const lena = Object.create(person)
lena.name = 'Elena'

const myObj = lena.__proto__

console.log(Object.keys(myObj))

const str = new String('I am string')

