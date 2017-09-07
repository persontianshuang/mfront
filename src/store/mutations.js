import * as types from './mutation-types'

const mutations = {
  //能力考
  [types.GET_NTEXT](state, ntext) {
    state.ntext = ntext
  },


  //
  [types.GET_SENTENCE_FROM_FLOW](state, flowSentenceId) {
    state.flowSentenceId = flowSentenceId
  },
    //指定sentence
    [types.GET_THIS_SENTENCE](state, idSentence) {
      state.idSentence = idSentence
    },


    // nx cache
    [types.SET_NxChoose](state, chooseNx) {
        state.chooseNx = chooseNx
    },
  //评论列表
    [types.GET_COMMENTS_LIST](state,commentsList) {
      state.commentsList = commentsList
    },

    //random
    [types.GET_RANDOM_SENTENCE](state, randomSentence) {
        state.randomSentence = randomSentence
    },




    //word
    [types.GET_WOED_MEANING](state, wordMeaning) {
        state.wordMeaning = wordMeaning
    },
    [types.GET_WORD_DTAIL](state, wordDtail) {
        state.wordDtail = wordDtail
    },



    [types.SET_CURRENT_INDEX](state, index) {
        state.currentIndex = index
    },
    //video
    [types.GET_PLAYLIST](state, playlist) {
        state.playlist = playlist
    },

    [types.GET_VEDIOLIST](state, vediolist) {
        state.vediolist = vediolist
    },

    [types.GET_MVSRC](state, mvSrc) {
        state.mvSrc = mvSrc
    },

    //music
    [types.GET_PLAYLIST_MUSIC](state, playlistMusic) {
        state.playlistMusic = playlistMusic
    },

    [types.GET_MUSICLIST](state, musiclist) {

        state.musiclist = musiclist
    },

    [types.GET_MUSIC_SRC](state, musicSrc) {
        state.musicSrc = musicSrc
    },


}

export default mutations
