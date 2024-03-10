function fibonacci(n) {
    if (n < 0) {
        return 0
    }

    if (n <= 2) {
        return 1
    }

    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(6));

function fibonacci(n) {
  if (n <= 0) {
    return 0
  }

  if (n <= 2) {
    return 1
  }

  let prev = 1
  let res = 1


  for (let i = 0; i < n - 2 ; i++) {
    let top = res
    res += prev
    prev = top
  }
}
