import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // global variable
  state: {
    username: '未登录',
    user_state: false,
    u_id: -1  // -1是当前没有用户登录
  },
  // monitor the change of state value in real time
  getters: {

  },
  mutations: {
    change_status(state, username) {
      state.username = username
      state.user_state = true
    },
    change_id(state, id) {
      state.u_id = id
    }
  },
  actions: {
    login(context, username) {
      context.commit('change_status', username)
    },
    changeId(context, id) {
      context.commit('change_id', id)
    }
  },
  modules: {
  }
})
