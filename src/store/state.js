import { loadNxChoose } from '../components/comm/cache'

const state = {
    //能力考
    ntext: {},

    // random
    randomSentence: {},

    idSentence: {},
    flowSentenceId: '',
    //评论列表
    commentsList:[],


    wordsListIndex: 0,
    wordMeaning: '',
    wordDtail: {},


    currentIndex: 0,
    // vedio
    vediolist: [],
    playlist: [],
    mvSrc: '',
    // music
    musiclist: [],
    playlistMusic: [],
    musicSrc: '',
    //缓存
    // 缓存 设置中的句子等级
    chooseNx: loadNxChoose(),
    // 缓存 见过的句子的历史记录
    history: [],
    //
    toKillCollection: []
}

export default state
