const socket = io()

var message = document.getElementById('message');
var username = document.getElementById('username');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var actions = document.getElementById('actions');

btn.addEventListener('click', function () {
    socket.emit('chat:message', {
        message: message.value,
        username: username.value
    });
});

message.addEventListener('keypress', function () {
    socket.emit('chat:typing', username.value);
});

socket.on('chat:message', function (data) {
    actions.innerHTML = '';
    output.innerHTML += `<p>
      <strong>${data.username}</strong>: ${data.message}
    </p>`
});

socket.on('chat:typing', function (data){
   actions.innerHTML = `<p><em>${data} escribiendo...</em></p>` 
})