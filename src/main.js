import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
import { sync } from 'vuex-router-sync'

const updateEvent = new Event('SWUpdated')
Vue.config.productionTip = false
sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
