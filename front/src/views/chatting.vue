<template>
  <v-container>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Chart...</h1>

    <v-card class="mx-auto">
      <v-list three-line>
        <v-subheader
            :key="room.code"
            v-text="room.text"></v-subheader>
        <template v-for="(item, index) in messages">
          <v-divider v-show="index > 0" :key="index" :inset="true" />

          <v-list-item :key="item.userName + index">
            <v-list-item-avatar>
              <v-img :src="item.icon" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="item.userName"/>
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
import { mapMutations, mapState } from 'vuex'

export default {
  mixins: [socketio],
  created() {
    this.socketio().on('message', (message) => {
      this.SET_MESSAGES(message)
    })
  },
  computed: {
    ...mapState('chatting', ['userName', 'room', 'messages'])
  },
  data () {
    return {
      inputMessage: ''
    }
  },
  methods: {
    ...mapMutations('chatting', ['SET_MESSAGES']),
    pushMessage () {
      this.sendMessage(this.inputMessage);
      this.inputMessage = ''
    }
  }
}
</script>
