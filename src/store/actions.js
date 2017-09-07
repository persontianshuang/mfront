import * as types from './mutation-types'

import axios from 'axios'

import { saveNxChoose } from '../components/comm/cache'

const root_url = 'http://123.206.220.149:8768'
// const root_url = 'http://0.0.0.0:8768'
// 222.209.33.124

//能力考
export const getNtext = ({ commit }, payload) => {
  axios.get(root_url + '/ntext/show/'+payload)
    .then((response) => {
      // console.log(response.data)
      commit(types.GET_NTEXT, response.data)
    })
}

//word
export const getWordMeaning = ({ commit }, payload) => {
  axios.get(root_url + '/words/' + payload)
    .then((response) => {
      this.word = response.data
      commit(types.GET_WOED_MEANING, response.data)
    })
}

// export const getWordDtail = ({ commit }, payload) => {
//   axios.get(root_url+'/word/all/'+payload)
//     .then((response) => {
//       commit(types.GET_WORD_DTAIL,response.data)
//     })
// }
//word结束


//comment
export const postComment= ({ commit }, payload) => {
  axios.get(root_url + '/sentences/' + payload.id +'/comments/post/'+payload.content)
    .then((response) => {
      console.log(response.data)
    })
}
export const getComment= ({ commit }, payload) => {
  axios.get(root_url + '/sentences/' + payload+'/comments')
    .then((response) => {
      // console.log(response.data)
      commit(types.GET_COMMENTS_LIST, response.data)
    })
}
// 指定sentence
export const getThisSentence= ({ commit }, payload) => {
  axios.get(root_url + '/sentences/' + payload)
    .then((response) => {
      commit(types.GET_THIS_SENTENCE, response.data)
    })
}

export const getSentenceFromflow= ({ commit }, payload) => {

  return axios.get(root_url + '/sentences/' + payload.index+'/video/'+payload.id)
    // .then((response) => {
    //   commit(types.GET_SENTENCE_FROM_FLOW, response.data['sentence_id'])
    //
    //
    // })
}



// random
export const getRandomSentence = ({ commit }, payload) => {

        // payload nx 缓存
        function str_nx(payload) {
            let final_nx = ''
            payload.forEach(function(item) {
                if (item.status == true) {
                    final_nx = final_nx + item.Nx + '&'
                }
            });
          if (final_nx==''){
            return 'null'
          }
          else {
            return final_nx
          }

        }


        axios.get(root_url + '/sentences/random/' + str_nx(payload))
            .then((response) => {
                // console.log(response.data)
                commit(types.GET_RANDOM_SENTENCE, response.data)
            })


    }
    // random结束



//video
export const getPlaylist = ({ commit }, payload) => {
    axios.get(root_url + '/videos/' + payload + '/sentences')
        .then((response) => {
            // console.log(response.data)
            commit(types.GET_PLAYLIST, response.data)
        })
}

export const getVediolist = ({ commit }, payload) => {
    axios.get(root_url + '/videos/')
        .then((response) => {
            commit(types.GET_VEDIOLIST, response.data)
        })
}

export const getMvSrc = ({ commit }, payload) => {
        axios.get(root_url + '/videos/' + payload)
            .then((response) => {
                commit(types.GET_MVSRC, response.data['mp4_url'])
            })
    }
    //video结束





//music
export const getPlaylistMusic = ({ commit }, payload) => {
    axios.get(root_url + '/music/' + payload)
        .then((response) => {
            commit(types.GET_PLAYLIST_MUSIC, response.data)
            console.log(response.data)
        })

}

export const getMusiclist = ({ commit }, payload) => {
    console.log('sajdsajajs')
    axios.get(root_url + '/musiclist')
        .then((response) => {
            commit(types.GET_MUSICLIST, response.data)
            console.log(response.data)
        })
}

export const getMusicSrc = ({ commit }, payload) => {
    axios.get(root_url + '/musicurl/' + payload)
        .then((response) => {
            commit(types.GET_MUSIC_SRC, response.data)
        })
}
