function accum(string) {
    const arr = string.toUpperCase().split('')
    const newArr = arr.map((el, i) => {
        return el += el.repeat(i).toLowerCase()
    })
    const res = newArr.join('-')
    return res 
}

console.log(accum('abcd'));