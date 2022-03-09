const js_socket = require("ws")


// Establishing Connection 
let sock_cache = []
const sock = new js_socket.Server({port:88})

// Events 
sock.on("connection",function(client){
    console.log('New Connection')
    client.on('message',function(message){
        sock.clients.forEach(function each(cli) {
            if (cli !== sock) {
              client.send(message);
            }
        })
    })
})
