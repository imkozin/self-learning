function isUnique(str) {
    for (let i = 0; i < str.length; i++) {
        const el = str[i];

        
        if (str.lastIndexOf(el) !== i) {
            return false
        }
    }

    return true
}


console.log(isUnique('abcdef'));
console.log(isUnique('123456'));
console.log(isUnique('abcdabc'));