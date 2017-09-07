
// 能力考
export const ntext = state => state.ntext


// /random
export const randomSentence = state => state.randomSentence
    //random结束

// singer是函数 ；state是参数； state.singer是返回值
export const currentIndex = state => state.currentIndex
export const wordsListIndex = state => state.wordsListIndex


//flowSentenceId
export const flowSentenceId = state => state.flowSentenceId

//
export const idSentence = state => state.idSentence

// nx
export const chooseNx = state => state.chooseNx
//
export const commentsList = state => state.commentsList


// word
export const wordMeaning = state => state.wordMeaning
export const wordDtail = state => state.wordDtail


//video
export const vediolist = state => state.vediolist
export const mvSrc = state => state.mvSrc
export const playlist = state => state.playlist

export const currentVedio = (state) => {
    return state.playlist[state.currentIndex] || {}
}

export const nextVedio = (state) => {
    return state.playlist[state.currentIndex + 1] || {}
}

//music
export const musiclist = state => state.musiclist
export const musicSrc = state => state.musicSrc
export const playlistMusic = state => state.playlistMusic

export const currentSong = (state) => {
    return state.playlistMusic[state.currentIndex] || {}
}

export const nextSong = (state) => {
    return state.playlistMusic[state.currentIndex + 1] || {}
}
