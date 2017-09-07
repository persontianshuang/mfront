<template>
    <div>
      {{currentVedio}}
      {{playlist}}
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
      <blockquote class="vedio-text">
        <span v-for="(item,index) in currentVedio.words_list">

        <ruby :class="item.word_belongsto_n">
          <a v-on:click="open('right',item)">{{ item.word_mecab[0] }}</a> <rt> {{ item.mecab[10] }} </rt>
        </ruby><span> &nbsp </span>

         </span>
      </blockquote>



      <video ref="video"
             :src="mvSrc"
             controls
             @timeupdate="updateTime"
      width="100%"></video>

      <div>
        <div class="bg-info sj">
        <p v-if="sentence_jp">{{currentVedio.jp}}</p>
        <p v-if="sentence_cn">{{currentVedio.cn}}</p>
        </div>
        <mu-raised-button
          @click="jp" label="日语字幕" class="demo-raised-button" secondary/>

        <mu-raised-button
          @click="cn" label="中文字幕" class="demo-raised-button" primary/>
      </div>


      <!--做该句子的笔记，有些惯用语，语法 未来支持也会在下面显示-->
      <!--框 输入与提交-->


    </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'


  export default {
    data () {
      return {
        tt: 0,
        vedio_voice: 1,
        vedio_progress_bar: 0,
        beforeOpen: false,
        clik: {},
        rightPopup: false,
        sentence_jp: true,
        sentence_cn: true,
      }
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
        'wordsListIndex',
        'currentIndex',
        'currentVedio',
        'sentenceWordInfo',
        'sentenceWordInfoMeaning',
        'mvSrc'
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

      jp() {
        this.jp = !this.jp
      },

      cn() {
        this.cn = !this.cn
      },

      open (position,item) {
        this[position + 'Popup'] = true;
        this.beforeOpen = this.$refs.video.paused
        this.$refs.video.pause()
        this.clik = item

        this.sendMessage(this.clik.id)
      },
      close (position) {
        this[position + 'Popup'] = false
        if (this.beforeOpen){
          this.$refs.video.pause()
        }
        else {
          this.$refs.video.play()
        }
//        this.$refs.video.play()
      },


      next() {
        let index = this.currentIndex + 1
        if (index === this.playlist.length) {
          index = 0
        }
        this.setCurrentIndex(index)

//        console.log(this.currentVedio.end)
        this.$refs.video.currentTime = parseInt(this.currentVedio.start)
//        console.log(this.$refs.video.currentTime)
      },

      pre() {
        let index = this.currentIndex - 1
        if (index === -1) {
          index = this.playlist.length - 1
        }
        this.setCurrentIndex(index)

        this.$refs.video.currentTime = parseInt(this.currentVedio.start)
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
        this.$refs.video.currentTime = parseInt(this.currentVedio.start)

      },

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
        this.$refs.video.currentTime = parseInt(this.currentVedio.start)
      },

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


      ...mapMutations({
        setCurrentIndex: 'SET_CURRENT_INDEX',
      }),
      ...mapActions([
        'sendMessage', // 映射 this.increment() 为 this.$store.dispatch('increment')
        'getPlaylist',
        'getMvSrc'
      ]),
//         ...mapActions({
//           add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
//         })

    },

    components: {

    }

  }


</script>

<style>
  rt{
    font-size: 20px;
    color: #F890B0;
  }
  .sj {

    font-size: 16px;
  }
  .vedio-text{

  }

  .demo-popup-right {

    z-index: 100;

    display: flex;
    width: 100%;
    height: 100%;
    max-width: 375px;
    align-items: center;
    padding: 24px;
  }



  .N1{
    background-color: gainsboro;
  }
  .N2{
    background-color: lightpink;
  }
  .N3{
    background-color: #FEFFC6;
  }
  .N4{
    background-color: #DAFFC6;
  }
  .N5{
    background-color: #C6EBFF;
  }

  .S0{
    background-color: rgba(190, 184, 235, 1);
  }

  .S1{
    background-color: rgba(190, 184, 235, 1);
  }

</style>
