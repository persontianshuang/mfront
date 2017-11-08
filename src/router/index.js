import Vue from 'vue'
import Router from 'vue-router'

// import Sentence from './sentence'
import Main from './main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    ...Main,
  ]
  
})

