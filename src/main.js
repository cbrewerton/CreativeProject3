import Vue from 'vue'
import App from './App.vue'
import router from './router'
import things from './activities.js'

let data = {
  activities: things,
  list: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
