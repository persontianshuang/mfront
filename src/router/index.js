import Vue from 'vue'
import Router from 'vue-router'

import Sentence from './sentence'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/sentence/10'
    },
    ...Sentence,
  ]
})

