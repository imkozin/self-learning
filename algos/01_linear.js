const array = [1, 2, 7, 8, 9, 10, 3, 4, 5, 6, 11]
let count = 0

function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i ++) {
        count += 1
        if (arr[i] === item) {
            return i
        }
    }

    return null
}

console.log(linearSearch(array, 8));
console.log('count = ', count);