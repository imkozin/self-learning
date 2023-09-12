// DOM

// Старые методы поиска элемента(ов) на странице

// getElementById() - поиск по id
let unicalID = document.getElementById('unicalID')
// console.log('unicalID: ', unicalID);
console.dir(unicalID);

// // getElementsByClassName() - поиск по классу
// let className = document.getElementsByClassName('class__name')
// console.log('className: ', className);

// let items = document.getElementsByClassName('item')
// console.log('items: ', items);

// // getElementsByTagName() - поиск по тегу
// let title = document.getElementsByTagName('h1')
// console.log('title: ', title);

// let titleTwo = document.getElementsByTagName('h2')
// console.log('titleTwo: ', titleTwo);

// // getElementsByName() - используеться редко, осуществляет поиск элемента по атрибуту name
// let myNameAtr = document.getElementsByName('myName')
// console.log('myNameAtr: ', myNameAtr);

// let myNameTwo = document.getElementsByName('myNameTwo')
// console.log('myNameTwo: ', myNameTwo);

// // ============
// console.log('==============');
// // Новые методы поиска элемента(ов) на странице
// // querySelector() querySelectorAll()
// let queryUnicalID = document.querySelector('#unicalID')
// console.log('queryUnicalID: ', queryUnicalID);

// let queryClassName = document.querySelector('.class__name')
// console.log('queryClassName: ', queryClassName);

// let queryItems = document.querySelectorAll('.item')
// console.log('queryItems: ', queryItems);

// let queryTitle = document.querySelector('h1')
// console.log('queryTitle: ', queryTitle);

// let queryTitleTwo = document.querySelectorAll('h2')
// console.log('queryTitleTwo: ', queryTitleTwo);

// let queryMyNameAtr = document.querySelectorAll('[name="myNameTwo"]')
// console.log('queryMyNameAtr: ', queryMyNameAtr);


// Обработчики событий
// addEventListener(event, handle)

let button = document.querySelector('#btn')
console.log('button: ', button);

// button.addEventListener('click', (e) => {
//   console.log('Клик по кнопке произошел', e);
// })

// button.addEventListener('dblclick', (e) => {
//   console.log('Клик по кнопке произошел', e);
// })

// button.addEventListener('mouseover', (e) => {
//   console.log('Наведение по кнопке произошло', e);
// })

// button.addEventListener('mouseout', (e) => {
//   console.log('Отведение по кнопке произошло', e);
// })

// button.addEventListener('mousedown', (e) => {
//   console.log('Зажатие по кнопке произошло', e);
// })

// button.addEventListener('mouseup', (e) => {
//   console.log('Отжатие по кнопке произошло', e);
// })

// button.addEventListener('mousemove', (e) => {
//   console.log('mousemove по кнопке произошло', e.layerX);
// })

let inputName = document.querySelector('#inputName')

inputName.addEventListener('focus', () => {
  console.log('фокус по инпуту произошел');
})

inputName.addEventListener('change', (e) => {
  console.log('change по инпуту произошел', e);
  console.log('value', e.target.value);
})

inputName.addEventListener('input', (e) => {
  console.log('change по инпуту произошел', e);
  // console.log('value', e.target.value);
})


document.addEventListener('DOMContentLoaded', () => {
  console.log('обьект document сформирован');
})

// document.addEventListener('keydown', (e) => {
//   console.log('Клик по какой-то клавише произошел', e);
// })

let boxItem = document.querySelector('#boxItem')

let hor = 0
let ver = 0

document.addEventListener('keydown', (e) => {
  console.log(e.keyCode);

  switch(e.keyCode) {
    case 37:
      --hor
      boxItem.style.left = hor + 'px'
      break;
    case 39:
      ++hor
      boxItem.style.left = hor + 'px'
      break;
    case 38:
      --ver
      boxItem.style.top = ver + 'px'
      break;
    case 40:
      ++ver
      boxItem.style.top = ver + 'px'
      break;
  }
})


let btnShow = document.querySelector('#isShow')
let massageBlock = document.querySelector('#massage')

let isShow = false

// 1)
btnShow.textContent = 'Показыть сообщение'
btnShow.addEventListener('click', () => {
  isShow = !isShow

  if (isShow) {
    massageBlock.style.display = 'block'
    btnShow.textContent = 'Скрыть сообщение'
  } else {
    massageBlock.style.display = 'none'
    btnShow.textContent = 'Показыть сообщение'
  }
})


// 2)

// btnShow.addEventListener('click', () => {
//   isShow = !isShow

//   isShow ? btnShow.textContent = 'Скрыть сообщение'
//   : btnShow.textContent = 'Показыть сообщение'

//   massageBlock.classList.toggle('massage_active')
// })


// 3)
// btnShow.addEventListener('click', () => {
//   isShow = !isShow

//   if (isShow) {
//     massageBlock.classList.add('massage_active')
//     btnShow.textContent = 'Скрыть сообщение'
//   } else {
//     massageBlock.classList.remove('massage_active')
//     btnShow.textContent = 'Показыть сообщение'
//   }
// })



let tabs = document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('.tab-content');

tabs[0].classList.add('tab_active')
tabContents[0].classList.add('tab-content_active')

function openTab(event) {
  // Скрываем все табы
  tabContents.forEach(function(tabContent) {
    tabContent.classList.remove('tab-content_active')
  });

  tabs.forEach(function(tab) {
    tab.classList.remove('tab_active')
  });

  // Отображаем выбранный таб
  let tabId = event.target.id.replace('tab', 'content');

  document.querySelector('#' + tabId).classList.add('tab-content_active')
  document.querySelector('#' + event.target.id).classList.add('tab_active')
}
console.log('tabs', tabs);
tabs.forEach(function(tab) {
  tab.addEventListener('click', openTab);
});