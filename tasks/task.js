// function getSum(nums, k) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] + nums[j] == k) {
//                 return [nums[i], nums[j]]
//             }
//         }
//     }

//     return []
// }

// function getSum(nums, k) {
//     const hashSet = {}

//     for (let i = 0; i < nums.length; i++) {
//         const current = k - nums[i]
//         if (hashSet[current] !== undefined) {
//             return [nums[i], current]
//         }

//         hashSet[nums[i]] = i
//     }

//     return []
// }

// function getSum(nums, k) {
//     const numSet = new Set();

//     for (let i = 0; i < nums.length; i++) {
//         const complement = k - nums[i];

//         if (numSet.has(complement)) {
//             return [nums[i], complement];
//         }

//         numSet.add(nums[i]);
//     }

//     return [];
// }

function getSum(nums, k) {
    const hashNum = {}

    for (let i = 0; i < nums.length; i++) {
      let n = k - nums[i]
      if (n in hashNum) {
        return [hashNum[n], i]
      }
      hashNum[nums[i]] = i
    }
    return []
}

console.log(getSum([-3, 0, 2, 4, 5], 7));
console.log(getSum([-3, 0, 2, 4, 5], 6))