import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import router from '../src/router/index'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
