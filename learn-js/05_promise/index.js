console.log('requesting data...');

// setTimeout(() => {
//     console.log('preparing data...');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true

//         console.log('data received', backendData);
//     }, 2000)

// }, 2000)

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('preparing data...')

//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }

//         resolve(backendData)

//     }, 2000)
// })

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true
//       reject(data)
//     }, 2000)
//   })
// })
// .then((clientData) => {
//     clientData.fromPromise = true
//     return clientData
// })
// .then((data) => {
//     console.log('modified', data)
// })
// .catch((e) => {
//   console.error('error', e)
// })
// .finally(() => console.log('finally'))

const sleep = (ms) => {
    return new Promise(resolve => {setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log('after 2 seconds'))
// sleep(3000).then(() => console.log('after 3 seconds'))

Promise.all([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('All promises');
    })

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log('Race promises')
})