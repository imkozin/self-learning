function findShort(string) {
    const arr = string.split(' ')
    const sortedArr = arr.sort((a, b) => {
        return a.length - b.length
    })
    return sortedArr[0]
}

console.log(findShort('I love JavaScript'));
console.log(findShort('Hello my name is John'))
