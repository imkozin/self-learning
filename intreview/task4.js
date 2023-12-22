const customObject = {
  a: 'Hello',
  b: 42,
  c: false,
}

customObject[Symbol.iterator] = function* () {
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      yield [key, this[key]]
    }
  }
}

for (const [key, value] of customObject) {
  console.log(`Key: ${key}, Value: ${value}`)
}
