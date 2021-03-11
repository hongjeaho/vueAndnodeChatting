const app = require('./app')
const config = require('./config/config')
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.socketSet(io)

server.listen(config.server_port, () => {
  console.log('서버가 시작  되었습니다.')
})
