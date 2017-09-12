// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import goods from './components/goods/goods'

Vue.use(VueRouter)
Vue.config.productionTip = false

// let app = Vue.extend(App)
// let router = new VueRouter()

const routes = [
  {path: '/goods', component: goods}
]

const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// router.map({
//   '/goods': {
//     component: goods
//   }
// })
//
// router.start(app, '#app')
