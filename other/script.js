const reverse = (str) => {    
    let result = '';
    let i = 0;

    while (i < str.length) {
        result = result + str[i];
        i = str.length - 1;
    }

    return result;
}

reverse('Hello, world!')


const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
    const iter = (n, d) => {
      if (n % d === 0) {
        return d;
      }
      if (d > n / 2) {
        return n;
      }
      return iter(n, d + 1)
    }
  
    return iter(num, 2)
    // END
  };
  

console.log(smallestDivisor(15));

const isPrime = (n) => {
    if (n <= 1) {
       return false;
     }
   
     for (let i = 2; i < n; i++) {
       if (n % i === 0) {
         return false; 
       }
     }
   
     return true;
   }