import io from 'socket.io-client'
const socket = io('http://localhost:3001')

export default {
    methods: {
        sendMessage (message) {
            socket.emit('message', message)
        },
        socketio () {
          return socket
        }
    }
}
