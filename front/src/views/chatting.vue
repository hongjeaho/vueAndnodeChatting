<template>
  <v-container>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Chart...</h1>

    <v-card class="mx-auto">
      <v-list three-line>
        <v-subheader
            :key="chatting.room"
            v-text="chatting.room"></v-subheader>
        <template v-for="(item, index) in chatting.messages">
          <v-divider v-show="index > 0" :key="index" :inset="true" />

          <v-list-item :key="item.username + index">
            <v-list-item-avatar>
              <v-img :src="item.icon" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="item.username"/>
              <v-list-item-subtitle v-text="item.message"/>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
    <v-text-field v-model="inputMessage" @keydown.enter="pushMessage"/>
  </v-container>
</template>

<script>
import socketio from '@/mixins/socketio'

export default {
  mixins: [socketio],
  created() {
    this.socketio().on('message', (message) => {
      this.chatting.messages.push(message)
    })
  },
  data () {
    return {
      chatting: {
        room : 'TEST',
        messages: []
      },
      inputMessage: ''
    }
  },
  watch: {
    'catting.messages'(value) {
      console.log(value)
    }
  },
  methods: {
    pushMessage () {
      this.sendMessage(this.inputMessage)
      this.chatting.messages.push({
        username: 'me',
        message: this.inputMessage
      })
      this.inputMessage = ''
    }
  }
}
</script>
