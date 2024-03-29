// function findMinAndMax(arr) {
//   let min = arr[0]
//   let max = arr[0]

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i]
//     } else if (arr[i] > max) {
//       max = arr[i]
//     }
//   }

//   return [min, max]
// }

// function findMinAndMax(array) {
//   const min = Math.min(...array);
//   const max = Math.max(...array);

//   return [min, max];
// }

function findMinAndMax(array) {
    let res = []
    const minVal = Math.min.apply(null, array)
    const maxVal = Math.max.apply(null, array)
    res.push(minVal)
    res.push(maxVal)
    return res
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const result = findMinAndMax(numbers);
console.log(result); 

function minMax(nums) {
    // let max = nums[0]
    // let min = nums[0]

    let max = nums.reduce((acc, next) => Math.max(acc, next))

    let min = nums.sort((a, b) => a - b).shift()

    // for (let i = 0; i < nums.length; i++) {
    //     // if (max < nums[i]) {
    //     //     max = nums[i]
    //     // }
    //     // else if (min > nums[i]) {
    //     //     min = nums[i]
    //     // }
    //     max = Math.max(nums[i], max)
    //     min = min > nums[i] ? nums[i] : min
    // }
    return [min, max]
}

console.log(minMax(numbers));

