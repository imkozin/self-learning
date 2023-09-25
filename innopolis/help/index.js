let getTodos = fetch('https://reqres.in/api/users?per_page=12')

getTodos
  .then((response) => {
    return response.json()
  })
  .then((result) => {
    console.log(result);
    outputPage(result)
  })

// console.log('getTodos', getTodos);

const outputPage = (data) => {
  // console.log('data', data);

  data.data.forEach((element) => {
    console.log('element', element)
    let todo = document.createElement('div')
    let title = document.createElement('h2')
    let completed = document.createElement('span')

    todo.append(title)
    todo.append(completed)

    document.body.append(todo)
  })
}

