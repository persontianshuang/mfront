import Vue from 'vue'
import Router from 'vue-router'

// video
import MusicList from '@/components/music/musicList'
import MusicDtails from '@/components/music/musicDtails'

import VedioList from '@/components/vedio/vedioList'
import VedioDtails from '@/components/vedio/videoDtails'

import RandomSentence from '@/components/random_sentence/random'
import IdSentence from '@/components/random_sentence/id_sentence'
import Comments from '@/components/comments/comments'

import MainPage from '@/components/main/main_page'

import Setting from '@/components/settings/setting'
import Word from '@/components/words/word'

import NtextCreate from '@/components/ntext/ntext_create'
import NtextUse from '@/components/ntext/ntext_use'
import NtextDtails from '@/components/ntext/ntext_dtails'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },

    {
      path: '/ntext/create',
      name: 'ntext_create',
      component: NtextCreate,
    },
    {
      path: '/ntext/use/:id',
      name: 'ntext_use',
      component: NtextUse,
    },

    {
      path: '/ntext/dtails/:id',
      name: 'ntext_dtails',
      component: NtextDtails,
    },


    {
      path: '/sentence/:id',
      name: 'id_sentence',
      component: IdSentence,
    },

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
      path: '/random',
      name: 'random_sentence',
      component: RandomSentence,
    },
      //music 路由开始
      {
        path: '/music',
        name: 'music_export',
        component: MusicList,
        // children: [
        //   {
        //     path: ':id',
        //     name: 'music_dtails',
        //     component: MusicDtails,
        //   }
        // ]

      },

    {
      path: '/musicdtails/:id',
      name: 'music_dtails',
      component: MusicDtails,
    },
    //music 路由结束
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

