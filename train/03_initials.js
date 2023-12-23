function toInitials(string) {
    const nameArr = string.split(' ')
    const getFirstLetter = nameArr.map((el) => {
        return el.slice(0, 1).toUpperCase() + '.'
    })
    const initials = getFirstLetter.join('')
    return initials
}

console.log(toInitials('Elon Musk'));
console.log(toInitials('bill gates'));