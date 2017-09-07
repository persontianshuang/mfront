<template>
    <div>

      <mu-slider v-model="music_voice"
                 @change="speed"
                 :step="0.05" :max="1" class="demo-slider"/>

      <mu-slider v-model="music_progress_bar"
                 @change="changeindex"
                 :step="2" :max="playlistMusic.length" class="demo-slider"/>

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
      <blockquote>
        <span v-for="(item,index) in currentSong.words_list">

        <ruby :class="item.word_belongsto_n">
          <a v-on:click="open('right',item)">{{ item.mecab[0] }}</a> <rt> {{ item.mecab[10] }} </rt>
        </ruby><span> &nbsp </span>

         </span>
      </blockquote>


      <mu-popup position="right" popupClass="demo-popup-right" :open="rightPopup" @close="close('right')">
        <div>

          <!-- fullWidth-->
          <mu-raised-button label="关闭弹框" @click="close('right')" primary/>

          <mu-content-block @click="close('right')">
            <!--{{clik}}-->

            <p>
                <p>
                属于： {{sentenceWordInfo.Nx}} &nbsp |&nbsp
                发音：<a href="">  {{sentenceWordInfo.speak}} </a> <br>
                原形：  <a href="">  {{sentenceWordInfo.raw_word}}  </a>  &nbsp |&nbsp
                该句：<a href="">  {{sentenceWordInfo.this_word}} </a> <br>

                词性： <a href="">
                 {{sentenceWordInfo.tags}}
                </a>
            </p>

              释义： <br>
              <p class="bg-info"  style="padding: 1%">
                {{ sentenceWordInfo.meaning }}
              </p>

              更多词典查询：<br>
              <p>
                <a :href="['http://dict.hjenglish.com/jp/jc/' + sentenceWordInfo.raw_word]"> 沪江  </a>
                &nbsp |&nbsp
                <a :href="['http://jisho.org/search/' + sentenceWordInfo.raw_word]"> jisho  </a>  <br>
                <a :href="['http://www.gavo.t.u-tokyo.ac.jp/ojad/search/index/sortprefix:accent/narabi1:kata_asc/narabi2:accent_asc/narabi3:mola_asc/yure:visible/curve:fujisaki/details:invisible/limit:20/word:' + sentenceWordInfo.raw_word]"> 音调及变形  </a>
                &nbsp |&nbsp
                <a :href="['http://tangorin.com/examples/' + sentenceWordInfo.raw_word]"> 例句  </a>  <br>
              </p>
            </p>

          </mu-content-block>
        </div>

      </mu-popup>


      <audio ref="video"
             :src="musicSrc"

             @timeupdate="updateTime">
        Your browser does not support the audio element.
      </audio>


      <div>
        <div class="bg-info sj">
          <p v-if="sentence_jp">{{currentSong.sentence_jp}}</p>
          <p v-if="sentence_cn">{{currentSong.sentence_cn}}</p>
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
        music_voice: 1,
        music_progress_bar: 0,
        beforeOpen: false,
        clik: {},
        rightPopup: false,
        sentence_jp: false,
        sentence_cn: true,
      }
    },

    beforeMount () {
      this.getPlaylistMusic(this.$route.params.id)
      this.getMusicSrc(this.$route.params.id)
//      console.log(this.$route.params.id)
    },

    computed: {
//      this.$refs.video.defaultPlaybackRate = 0.2;

      ...mapGetters([

        'wordsListIndex',
        'currentIndex',
        'currentSong',
        'sentenceWordInfo',

        'playlistMusic',
        'musicSrc'
//        'nextSong'
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
        this.getPlaylistMusic(this.$route.params.id)
        this.getMusicSrc(this.$route.params.id)
      },

      jp() {
        this.sentence_jp = !this.sentence_jp
      },

      cn() {
        this.sentence_cn = !this.sentence_cn
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
        if (index === this.playlistMusic.length) {
          index = 0
        }
        this.setCurrentIndex(index)

//        console.log(this.currentSong.end)
        this.$refs.video.currentTime = parseInt(this.currentSong.start)
//        console.log(this.$refs.video.currentTime)
      },

      pre() {
        let index = this.currentIndex - 1
        if (index === -1) {
          index = this.playlistMusic.length - 1
        }
        this.setCurrentIndex(index)

        this.$refs.video.currentTime = parseInt(this.currentSong.start)
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
        this.$refs.video.currentTime = parseInt(this.currentSong.start)

      },

      speed() {
        this.$refs.video.playbackRate = this.music_voice
      },

      changeindex() {
        let index = this.music_progress_bar
        if (index === this.playlistMusic.length) {
          index = 0
        }
//        setCurrentIndex: 'SET_CURRENT_INDEX',使用的是映射
        this.setCurrentIndex(index)
        this.$refs.video.currentTime = parseInt(this.currentSong.start)
      },

      updateTime(e) {

        if (this.currentLyric) {
          this.currentLyric.seek(currentTime * 1000)
        }


        this.tt = e.target.currentTime

        if (e.target.currentTime >= parseInt(this.currentSong.end)){
          console.log('____________')
          this.setCurrentIndex(this.currentIndex+1)
          console.log(this.currentSong.end)
//          this.$refs.audio.currentTime = parseInt(this.currentSong.end)
          console.log(this.$refs.video.currentTime)
        }
        console.log(this.tt)
      },


      ...mapMutations({
        setCurrentIndex: 'SET_CURRENT_INDEX',
      }),
      ...mapActions([
        'sendMessage', // 映射 this.increment() 为 this.$store.dispatch('increment')
        'getPlaylistMusic',
        'getMusicSrc'
      ]),
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
    padding: 1%;
    font-size: 16px;
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
