import RandomSentence from '@/components/random_sentence/random'
import IdSentence from '@/components/random_sentence/id_sentence'

export default [
  {
    path: '/sentence/:id',
    name: 'id_sentence',
    component: IdSentence,
  },

  {
    path: '/random',
    name: 'random_sentence',
    component: RandomSentence,
  },


]
