"use strict";
// Basic types
let id = 5;
let company = 'Ivan Ko';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
// tuple
let person = [1, 'Ivan', true];
// tuple array
let employee;
employee = [
    [1, 'Ivan'],
    [2, 'John'],
    [3, 'Jane'],
];
// union
let pid;
pid = '22';
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Ivan'
};
// type assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// functions 
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 8));
function log(message) {
    console.log(message);
}
log('true');
const user1 = {
    id: 1,
    name: 'Ivan',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const ivan = new Person(1, 'Ivan');
const mike = new Person(2, 'Mike');
console.log(ivan, mike);
// subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Ivan', 'Developer');
console.log(emp.name);
// generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Ivan', 'John', 'Jane']);
