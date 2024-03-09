const randomColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16)

  console.log(color)
  return '#' + color
}

// randomColor()

function get(obj, path) {
  const keys = path.split('.')
  let value = obj

  for (const key of keys) {
    if (key in value) {
      value = value[key]
    } else {
      console.log('undefined')
      return undefined
    }
  }

  console.log(value)
}

const obj = {
  a: {
    b: {
      c: 'd',
    },
    eeeee: 'f',
  },
}

// get(obj, 'a.b'); // {c: 'd'}
// get(obj, 'a.b.c'); // 'd'
// get(obj, 'a.e'); // 'f'
// get(obj, 'a.x.e'); // 'undefined'
