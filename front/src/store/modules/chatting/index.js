const state = {
    userName: null,
    room: null,
    messages: [],
    roomList: [
        {code: '001', text: 'Room 1'},
        {code: '002', text: 'Room 2'},
        {code: '003', text: 'Room 3'},
    ]
}

const getters = {
    getRoom: state => state.room,
    getUserName: state => state.userName,
    getMessages: state => state.messages
}

const mutations = {
    SET_LOGIN: (state, payload) => {
        state.userName = payload.userName
        state.room = payload.room
    },
    SET_MESSAGES: (state, payload) => {
        state.messages.push({
            userName:  payload.userName,
            message: payload.message
        })
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}
