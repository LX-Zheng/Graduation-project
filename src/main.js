import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.directive('start', {
  bind(el, binding) {
    el.addEventListener('click', () => {
      axios.post('/api/record', {
        wp_id: binding.value.wp_id,
        u_id: binding.value.u_id
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    })
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
