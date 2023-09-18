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

const btn = document.querySelector('button');

btn.addEventListener('click', (() => {
    let getQuotes = fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => {
        outputPage(data)
    })
    .catch((err) => {
        console.log(err)
    })
}))



const outputPage = (data) => {
    data.forEach(element => {
        console.log(element);
        let todo = document.createElement('div')
        todo.style.border = '1px solid blue';
        todo.style.marginBottom = '20px';
        let title = document.createElement('h2')
        let completed = document.createElement('span')

        title.textContent = element.title;
        if (element.completed) {
            completed.textContent = 'Task resolved'
            completed.style.color = 'green'
        } else {
            completed.textContent = 'Task not resolved'
            completed.style.color = 'red'
        }

        todo.append(title);
        todo.append(completed);

        document.body.append(todo);
    });
}