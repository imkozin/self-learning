console.log('start');

function timeout2sec() {
    console.log('timeout2sec')
}

window.setTimeout(() => {
    console.log('inside timeout');
}, 0)

setTimeout(timeout2sec, 2000)

console.log('end');