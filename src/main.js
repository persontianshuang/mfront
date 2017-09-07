// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-default.css' // 使用 default 主题

import App from './App'
import router from './router'
import store from './store'


Vue.use(Vuex)
Vue.use(axios)
Vue.use(VueRouter)
Vue.use(MuseUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
