let box = document.querySelector('.box')

console.log(box.offsetLeft);
console.log(box.offsetTop);
console.log(box.offsetWidth)
console.log(box.offsetHeight)

console.log(box.clientTop);
console.log(box.clientLeft);

let openBlock = document.querySelector('#openBlock')

openBlock.addEventListener('click', () => {
  box.style.height = `${box.scrollHeight}px`
})

console.log('get computed', getComputedStyle(box).width);