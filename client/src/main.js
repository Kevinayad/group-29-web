import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Home from './views/Home.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { component } from 'vue/types/umd'
Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false
const routes = [
  { path: '/users', component: Home }]

const route = new VueRouter({
  routes
})
new Vue({
  router,
  route,
  render: function (h) { return h(App) }
}).$mount('#app')
