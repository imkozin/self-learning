const reverse = (str) => {    
    let result = '';
    let i = 0;

    while (i < str.length) {
        result = result + str[i];
        i = str.length - 1;
    }

    return result;
}

// reverse('Hello, world!')

const bigLettersCount = (str) => {
    // BEGIN (write your solution here)
    let uppercase = 0;
    
    for (let char of str) {
      if (char.toUpperCase() === char) {
        uppercase += 1
      }
    }

    return uppercase
    // END
  };


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
  

// console.log(smallestDivisor(15));

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

const sequenceSum = (begin, end) => {
    // BEGIN (write your solution here)
    if (begin > end) {
      return NaN;
    } else if (begin === end) {
      return begin
    } 
      
    return begin + sequenceSum(begin + 1, end)
    // END
  };
  
const addDigits = (n) => {
    let num = n.toString()
    let total = 0;
  
    for (let i = 0; i < num.length; i++) {
      total += Number(num[i])
    }
  
    return total;
  }
  
console.log(addDigits(123));

const capitalized = (w) => {
    let sentence = w.split(' ');

    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i];
        sentence[i] = word[0].toUpperCase() + word.slice(1);
    }

    console.log(sentence.join(', '));
}

capitalized('hello world');
