const str: string = 'Hello'

console.log(str);

const isFetching: boolean = true
const isLoading: boolean = false

let int: number = 42

const float: number = 4.2

const num: number = 3e10

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]

const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'TypeScript']

//tuple
const contact: [string, number] = ['Vladilen', 1234567]

// any
let variable: any = 42
variable = 'string'
variable = []

// func
function sayMyName(name: string): void {
    console.log(name)
}

// never
function throwError(message:string): never {
    throw new Error(message);
}

function infinite(): never {
    while ( true) {

    }
}

// type
type Login = string

const login: Login = 'admin'

type ID = string | number
const id1: ID = 213
const id2: ID = 'ffdsf'
// const id3: ID = true

type SomeType = string | null | undefined

