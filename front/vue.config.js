module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 3001,
    proxy: {
      '/socket' : {
        target: 'http://localhost:3000'
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
