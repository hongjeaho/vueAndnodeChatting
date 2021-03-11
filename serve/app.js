const app = require('express')()

app.socketSet = io => {
  io.sockets.on('connection', socket => {
    console.log('connection info : ', socket.request.connection._peername)

    socket.on('message', message => {
      console.log('message socket event : ', message)
      socket.broadcast.emit('message', createMessage('test', message))
    })

    socket.on('login', message => {
      console.log('login socket event')
    })

    socket.on('logout', message => {
      console.log('logout socket event')
    })

    socket.on('disconnect', () => {
      console.log('disconnection socket event')
    })
  })
}

const createMessage= (username, message) => {
  return {
    icon: '',
    username: username,
    message: message
  }
}

module.exports = app
