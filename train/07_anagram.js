function isAnagram(firstWord, secondWord) {
  const a = firstWord.toLowerCase()
  const b = secondWord.toLowerCase()

  const resA = a.split('').sort().join('')
  const resB = b.split('').sort().join('')

  return resA === resB
}

console.log(isAnagram('Логика', 'Иголка'))
console.log(isAnagram('абвг', 'ввга'));
