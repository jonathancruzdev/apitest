const span = document.querySelector('#datos');
const input = document.querySelector('#mensaje');
const form = document.querySelector('form');

const socket = io();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let msg = input.value; 
    console.log({msg})
    socket.emit('msg', msg);

})


socket.on('res', ( msg) => {
    console.log('Del server', msg)
    span.textContent = msg;
})