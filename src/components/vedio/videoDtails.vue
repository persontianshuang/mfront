<template>
  <div>
    <!--导航栏-->
    <mu-appbar title="路人女主">
      <mu-icon-button icon="close" slot="left"
                      to="/main"/>
    </mu-appbar>
    <!--进度条-->
    <mu-slider v-model="vedio_voice"
               @change="speed"
               :step="0.05" :max="1" class="demo-slider"/>

    <mu-slider v-model="vedio_progress_bar"
               @change="changeindex"
               :step="2" :max="playlist.length" class="demo-slider"/>

    <!--控制区域-->
    <mu-raised-button
      @click="pre" label="上一段" class="demo-raised-button" secondary/>
    <mu-raised-button
      @click="playOrPause" label="暂停|播放" class="demo-raised-button" primary/>

    <mu-raised-button
      @click="next" label="下一段" class="demo-raised-button" secondary/>

    <mu-raised-button
      @click="again" label="复读" class="demo-raised-button" primary/>

    <!--文字区域-->
    <nx :sentence=currentVedio></nx>



    <video ref="video"
           :src="mvSrc"
           controls
           @timeupdate="updateTime"
           width="100%"></video>

    <cnjp :sentence=currentVedio></cnjp>



    <!--做该句子的笔记，有些惯用语，语法 未来支持也会在下面显示-->
    <!--框 输入与提交-->


  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'
//组件
  import Cnjp from '../comm/show_cnjp'
  import Nx from '../comm/nx'


  export default {
    data () {
      return {
        tt: 0,
        vedio_voice: 1,
        vedio_progress_bar: 0,
        beforeOpen: false,
        clik: {},
        rightPopup: false,
      }
    },

    components: {
      Cnjp,
      Nx,
    },

//    created
    beforeMount () {

      this.getPlaylist(this.$route.params.id)
      this.getMvSrc(this.$route.params.id)
//      console.log(this.$route.params.id)
    },

    computed: {

      ...mapGetters([
        'playlist',
        'mvSrc',
//        正在播放
        'currentIndex',
        'currentVedio',

        'wordsListIndex',

      ]),


    },
    watch: {
      '$route': 'fetchData',
      topPopup (val) {
        if (val) {
          setTimeout(() => {
            this.topPopup = false
          }, 2000)
        }
      }
    },

    methods: {
      fetchData () {
        this.getPlaylist(this.$route.params.id)
        this.getMvSrc(this.$route.params.id)
      },
// 监听视频播放事件
      updateTime(e) {
        if (this.currentLyric) {
          this.currentLyric.seek(currentTime * 1000)
        }

        this.tt = e.target.currentTime

        if (e.target.currentTime >= parseInt(this.currentVedio.end)){
          console.log('____________')
          this.setCurrentIndex(this.currentIndex+1)
          console.log(this.currentVedio.end)
//          this.$refs.audio.currentTime = parseInt(this.currentVedio.end)
          console.log(this.$refs.video.currentTime)
        }
        console.log(this.tt)
      },
//      进度条
      speed() {
        this.$refs.video.playbackRate = this.vedio_voice
      },

      changeindex() {
        let index = this.vedio_progress_bar
        if (index === this.playlist.length) {
          index = 0
        }
//        setCurrentIndex: 'SET_CURRENT_INDEX',使用的是映射
        this.setCurrentIndex(index)
        this.$refs.video.currentTime = parseInt(this.currentVedio['start_seconds'])
      },


//      控制区域
      next() {
        let index = this.currentIndex + 1
        if (index === this.playlist.length) {
          index = 0
        }
        this.setCurrentIndex(index)

//        console.log(this.currentVedio.end)
        this.$refs.video.currentTime = parseInt(this.currentVedio['start_seconds'])
//        console.log(this.$refs.video.currentTime)
      },

      pre() {
        let index = this.currentIndex - 1
        if (index === -1) {
          index = this.playlist.length - 1
        }
        this.setCurrentIndex(index)

        this.$refs.video.currentTime = parseInt(this.currentVedio['start_seconds'])
      },

      playOrPause() {
        if (this.$refs.video.paused){
          this.$refs.video.play()
        }
        else {
          this.$refs.video.pause()
        }

      },

      again() {
//        todo
//        反复播放这一段
        this.$refs.video.currentTime = parseInt(this.currentVedio['start_seconds'])

      },



      ...mapMutations({
        setCurrentIndex: 'SET_CURRENT_INDEX',
      }),
      ...mapActions([
        'getPlaylist',
        'getMvSrc'
      ]),


    },


  }


</script>

<style>

</style>
