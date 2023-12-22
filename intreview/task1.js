Array.prototype.myMap = function (callback) {
  const result = []
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }
  return result
}

const originalArray = [1, 2, 3, 4, 5]

const doubledArray = originalArray.myMap(function (item) {
  return item * 2
})

console.log(doubledArray) 
