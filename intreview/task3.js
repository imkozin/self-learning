const obj1 = { "x": 5, "y": 42 }
const obj2 = {}
const obj3 = [null, false, 1]

function isEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0
  }

  return Object.keys(obj).length === 0
}

console.log(isEmpty(obj1))
console.log(isEmpty(obj2))
console.log(isEmpty(obj3))
