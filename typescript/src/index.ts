// Basic types

let id: number = 5
let company: string = 'Ivan Ko'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number

let ids: number[] = [1, 2, 3, 4, 5]

let arr: any[] = [1, true, 'hello']

// tuple
let person: [number, string, boolean] = [1, 'Ivan', true]

// tuple array
let employee: [number, string][]

employee = [
  [1, 'Ivan'],
  [2, 'John'],
  [3, 'Jane'],
]

// union
let pid: string | number
pid = '22'

// enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up)

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// objects
type User = {
  id: number
  name: string
}
const user: User = {
    id: 1,
    name: 'Ivan'
}

// type assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number


// functions 
function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(2,8));

function log(message: string | number): void {
    console.log(message);
}

log('true')

// interfaces
interface UserInterface {
  readonly id: number
  name: string,
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'Ivan',
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const ivan = new Person(1, 'Ivan')
const mike = new Person(2, 'Mike')

console.log(ivan, mike);

// subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Ivan', 'Developer')

console.log(emp.name);

// generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Ivan', 'John', 'Jane'])

