import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import dateFilter from '@/filters/date.filter'
import store from './store'
import 'material-design-icons-iconfont'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
