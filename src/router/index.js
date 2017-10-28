import Vue from 'vue'
import Router from 'vue-router'

import Sentence from './sentence'

// video
import VedioList from '@/components/vedio/vedioList'
import VedioDtails from '@/components/vedio/videoDtails'


import Comments from '@/components/comments/comments'

import MainPage from '@/components/main/main_page'

import Setting from '@/components/settings/setting'
import Word from '@/components/words/word'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    ...Sentence,
    {
      path: '/word/:id',
      name: 'word',
      component: Word,
    },

    {
      path: '/setting',
      name: 'setting',
      component: Setting,
    },
    {
      path: '/main',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/comments/:id',
      name: 'comments',
      component: Comments,
    },


    {
      path: '/vedio',
      name: 'vedio_export',
      component: VedioList,
      children: [
        {
          path: ':id',
          name: 'vedio_dtails',
          component: VedioDtails,
        }
      ]

    }
  ]
})

