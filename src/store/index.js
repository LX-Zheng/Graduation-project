import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // global variable
  state: {
    username: '未登录',
    user_state: false
  },
  // monitor the change of state value in real time
  getters: {

  },
  mutations: {
    change_status(state, username) {
      state.username = username
      state.user_state = true
    }
  },
  actions: {
    login(context, username) {
      context.commit('change_status', username)
    }
  },
  modules: {
  }
})
