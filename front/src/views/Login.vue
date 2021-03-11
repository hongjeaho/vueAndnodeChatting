<template>
  <v-container>
    <v-form
        v-model="valid"
        ref="form"
        lazy-validation>
      <v-text-field
          v-model="userName"
          :rules="nameRules"
          label="user name"
          equired />
      <v-select
        v-model="room"
        :items="rooms"
        :reules = "roomRules"
        item-text="name"
        item-value="number"
        label="rooms"
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
export default {
  data () {
    return {
      valid: true,
      userName: '',
      nameRules: [
          v => !!v || 'name is required',
          v => (v && v.length <= 5 || 'name must be less than 5 characters')
      ],
      roomRules: [
        v => !!v || 'item is required'
      ],
      rooms: [
        {number: '001', name: 'Room 1'},
        {number: '002', name: 'Room 2'},
        {number: '003', name: 'Room 3'},
      ],
      room: null
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    }
  }
}
</script>

<style scoped>

</style>
