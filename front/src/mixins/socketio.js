import io from 'socket.io-client'
import {mapMutations, mapState} from 'vuex'
const socket = io('http://localhost:3001')

export default {
    ...mapState('chatting', ['messages', 'userName', 'room']),
    methods: {
        ...mapMutations('chatting', ['SET_MESSAGES']),
        sendMessage (message) {
            this.SET_MESSAGES({
                userName: 'ME',
                message: message
            })

            socket.emit('message', {
                room: this.room,
                userName: this.userName,
                message: message,
            })
        },
        socketio () {
          return socket
        }
    }
}
