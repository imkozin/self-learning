const object1 = new Object({
  a: 'Hello',
  b: 42,
  c: false,
})

const object2 = Object.create(object1)
object2.d = 'Javascript'

function getAllKeys(obj) {
  let keysOfObject1 = []

  if (Object.getPrototypeOf(obj)) {
    keysOfObject1 = Object.keys(Object.getPrototypeOf(obj))
  }

  const keysOfObject2 = Object.keys(obj)
  
  const keys = keysOfObject1.concat(keysOfObject2)
  return keys
}

const allKeys = getAllKeys(object2)
console.log(allKeys)
