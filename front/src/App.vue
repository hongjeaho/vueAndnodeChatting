<template>
  <v-app>
    <router-view
        :key="this.$route.fullpath"
    />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
