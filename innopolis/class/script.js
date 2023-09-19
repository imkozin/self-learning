// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2)
//     }, 3000)
    
//     setTimeout(() => {
//         reject('Received error')
//     }, 2000)
// })

// promise
// .then((res) => {
//     console.log('response', res);
// })
// .catch((err) => {
//     console.log('error', err);
// })
// .finally(() => {
//     console.log('Runs anyway');
// })

// const btn = document.querySelector('button');

// btn.addEventListener('click', (() => {
//     let getQuotes = fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => res.json())
//     .then((data) => {
//         outputPage(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }))



// const outputPage = (data) => {
//     data.forEach(element => {
//         console.log(element);
//         let todo = document.createElement('div')
//         todo.style.border = '1px solid blue';
//         todo.style.marginBottom = '20px';
//         let title = document.createElement('h2')
//         let completed = document.createElement('span')

//         title.textContent = element.title;
//         if (element.completed) {
//             completed.textContent = 'Task resolved'
//             completed.style.color = 'green'
//         } else {
//             completed.textContent = 'Task not resolved'
//             completed.style.color = 'red'
//         }

//         todo.append(title);
//         todo.append(completed);

//         document.body.append(todo);
//     });
// }

const goods = [
  {
    title: 'Jeans',
    img_url: 'https://placebeard.it/640x360',
    img_description: 'jeans',
    description: 'Beautiful jeans',
    price: 100,
  },
  {
    title: "Men's Jeans",
    img_url: 'https://placebeard.it/640x360',
    img_description: 'jeans',
    description: 'Beautiful male jeans',
    price: 200,
  },
  {
    title: "Women's Jeans",
    img_url: 'https://placebeard.it/640x360',
    img_description: 'jeans',
    description: 'Beautiful female jeans',
    price: 300,
  },
]

const goodContainer = document.getElementById('goods-container')
const priceMin = document.getElementById('price_min')

const filters = {
    price_min: 0,
};

priceMin.addEventListener('input', (e) => {
    const currentValue = e.target.value;
    filters.price_min = +currentValue;

    const filteredGood = goods.filter((good) => good.price >= filters.price_min)

    renderGoods(goodContainer, filteredGood)
});

const renderGoods = (parentNode, goods) => {
    parentNode.innerHTML = '';

    goods.forEach((good) => {
      const goodTemplate = document.createElement('div')
      goodTemplate.classList.add('good')

      const goodHeader = document.createElement('h2')
      goodHeader.classList.add('good__header')
      goodHeader.innerText = good.title

      const goodImg = document.createElement('img')
      goodImg.classList.add('good__img')
      goodImg.src = good.img_url
      goodImg.alt = good.img_description

      const goodDescription = document.createElement('p')
      goodDescription.classList.add('good__description')
      goodDescription.textContent = good.description

      const goodPrice = document.createElement('p')
      goodPrice.classList.add('good__price')
      goodPrice.textContent = good.price

      const goodBuy = document.createElement('button')
      goodBuy.classList.add('good__buy')
      goodBuy.textContent = 'Buy'

      goodContainer.append(goodTemplate)
      goodTemplate.append(goodHeader)
      goodTemplate.append(goodImg)
      goodTemplate.append(goodDescription)
      goodTemplate.append(goodPrice)
      goodTemplate.append(goodBuy)
      
      parentNode.append(goodTemplate);
    })
}


renderGoods(goodContainer, goods)

