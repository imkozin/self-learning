function isPalindrom(str) {
    const arr = str.split('')
    let res = []

    for (let i = str.length - 1; i >= 0; i--) {
        // console.log(str[i]);
        res.push(str[i])
    }

    return res.join('') === str
}

// console.log(isPalindrom('hello'));

const reverseWords = (str) => {
    const arr = str.split(' ')

    const reversed = arr.map((i) => i.split('').reverse().join(''))

    return reversed.join(' ')
}

// console.log(reverseWords('Hello World JavaScript'));

const sortByHeight = (n, h) => {
    // const people = n.map((name, indx) => ({name, height: h[indx]}))

    // // console.log(people);
    // const sorted = people.sort((a, b) => b.height - a.height)

    // console.log(sorted);

    // const res = sorted.map(person => person.name)

    // return res
    // n.forEach((k, i) => {
    //     obj[k] = h[i]
    // });
    const obj = Object.assign(...n.map((k, i) => ({
        [k]: h[i],
      }))
    )

    return Object.keys(obj).sort((a, b) => obj[b] - obj[a])
}

// console.log(sortByHeight(['Mary', 'John', 'Emma'], [180, 165, 170]));

const getSum = (num) => {
    const arr = []
    for (let i = 0; i <= num; i++) {
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
            arr.push(i)
        }
    }

    const sum = arr.reduce((acc, cur) => {
        return acc + cur
    }, 0)
    console.log(arr);
    return sum
}

// console.log(getSum(7));

const findSentence = (arr) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].split(' ').length);
        newArr.push(arr[i].split(' ').length)
    }
    return Math.max.apply(null, newArr)
}

// console.log(findSentence(['alice and bob love leetcode', 'i think so too', 'hello world', 'this is great thank you very much']));

const toLowerCaseFunc = (str) => {
    const res = []
    for (let i = 0; i < str.length; i++) {

        res.push(str.charCodeAt(i))
    }


    const newArr = res.map((i) => i + 32)
    
    const newStrArr = newArr.map((i) => String.fromCharCode(i))

    const newStr = newStrArr.join('')

    return newStr
}

// console.log(toLowerCaseFunc('HELLO WORLD'));

// function removeRepeat(arr) {
//     const res = []

//     for (let i = 0; i < arr.length; i++) {
//         let count = 0
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[i] === arr[j]) {
//                 count++
//             }
//         }
//         if(count === 1) {
//             res.push(arr[i])
//         }
//     }

//     return res
// }

function removeRepeat(arr) {
  const res = []
  const dict = {}

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    dict[item] = dict[item] ? dict[item] + 1 : 1
  }
  console.log(dict);
  
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (dict[item] === 1) {
        res.push(item)
    }
  }
//   const res = Object.entries(dict).filter(([k, v]) => v === 1).map(([key]) => parseInt(key))
//   console.log(res);

  return res
}

// console.log(removeRepeat([1,1,2,2,3,4,5,5]));

// function reverseArr(arr) {
//     const res = []

//     arr.forEach(element => {
//         res.unshift(element)
//     });
//     return res
// }

function reverseArr(arr) {
  const res = []

  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    res.push(element)
  }
  return res
}

console.log(reverseArr([1, 2, 3, 4, 5]));