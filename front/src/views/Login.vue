<template>
  <v-container>
    <v-form
        v-model="valid"
        ref="form"
        lazy-validation>
      <v-text-field
          v-model="userName"
          :rules="nameRules"
          label="대화명"
          required />
      <v-select
        v-model="room"
        :items="roomList"
        :rules = "[v => !!v || '대화방을 선책해 주세요']"
        item-text="text"
        item-value="code"
        label="대화방"
        required />

      <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
      >
        대화하기
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>

import {mapMutations, mapState} from 'vuex'

export default {
  computed: {
    ...mapState('chatting', ['roomList'])
  },
  data () {
    return {
      valid: true,
      nameRules: [
          v => !!v || '대화명을 입력해 주세요',
          v => (v && v.length > 2 || '대화명을 두자리 이상 입력해 주세요')
      ],
      userName: null,
      room: null
    }
  },
  methods: {
    ...mapMutations('chatting', ['SET_LOGIN']),
    validate () {
      if (!this.$refs.form.validate()) return

      this.SET_LOGIN({
        userName: this.userName,
        room: this.roomList.filter(v => v.code === this.room).shift()
      })

      this.$router.push({name: 'chatting'})
    }
  }
}
</script>
