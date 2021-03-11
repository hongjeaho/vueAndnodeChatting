import Vue from 'vue'
import Vuex from 'vuex'
import vueModuels from '@/store/modules/index'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: vueModuels,
  strict: debug
})
