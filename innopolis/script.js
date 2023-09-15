let block = document.createElement('div')
console.dir(block)
console.log('block', block);

block.textContent = 'Some content text';

block.className = 'my-class';

block.classList.add('my-class-two')
block.classList.remove('my-class')

document.body.append(block)

block.setAttribute('align', 'center');

block.style.letterSpacing = '5px'
block.style.color = 'blue'
block.style.border = '1px solid blue'

let list = document.createElement('ul')

document.body.append(list)

list.innerHTML = `<li><a href="#">Item 1</a></li>
<li><a href="#">Item 2</a></li>
<li><a href="#">Item 3</a></li>`

console.log(list);

block.insertAdjacentHTML('beforebegin', '<div>Insert Element Before</div>')
block.insertAdjacentHTML('afterbegin', '<div>Insert ELement after begin</div>')

list.remove()

