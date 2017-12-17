<template>
  <div>


    <!--<div class="demo-refresh-container">-->
    <!--<mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>-->

    <!--文字区域-->
    <nx :sentence=randomSentence></nx>

    <video ref="video"
           :src=randomSentence.split_mp4_url
           controls
           autoPlay
           width="100%"

    ></video>


    <mu-slider v-model="vedio_voice"
               @change="speed"
               :step="0.05" :max="1" class="demo-slider"/>


    <mu-paper class="cnjp">
      <p style="color: #7e57c2">{{randomSentence.jp}}</p>
    </mu-paper>


    <!--</div>-->

    <!--@click="to_comment"-->
    <mu-bottom-nav class="random_footer">
      <!--iconClass-->
      <mu-bottom-nav-item class="color" value="recents" title="斩0" icon="flight takeoff"/>
      <mu-bottom-nav-item class="color" value="favorites" title="收藏" icon="favorite"/>
      <mu-bottom-nav-item class="color" value="nearby" :title=" '评论'+ commentsList.length " icon="label"
                          :to="{ name: 'comments', params: { id: randomSentence._id }}"

      />
    </mu-bottom-nav>



  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import { mapActions } from 'vuex'


  export default {
    data () {
      return {
//        refreshing: false,
//        trigger: null,

        vedio_voice: 0.8,
      }
    },

    components: {

    },


    created () {

    },

    beforeMount () {

    },




    computed: {

      ...mapGetters([
        'randomSentence',
        'commentsList'

      ]),
    },

    mounted () {
      this.trigger = this.$el




    },

    beforeUpdate() {



    },



    methods: {
//      refresh () {
//        this.refreshing = true
//        this.getRandomSentence()
//        console.log('a')
//        this.refreshing = false
//      },


      speed() {
        this.$refs.video.playbackRate = this.vedio_voice
      },

      to_comment() {
        console.log('dsad')
        this.$router.push({ name: 'comments', params: { id: '598b18a9d9f092140fc8f9de' }})
      },




      ...mapMutations({
//        setCurrentIndex: 'SET_CURRENT_INDEX',
      }),
      ...mapActions([
        'getRandomSentence', // 映射 this.increment() 为 this.$store.dispatch('increment')

      ]),



    }



  }


</script>


<style>

  .demo-flat-button {
    margin-right: 20px;
    margin-left: 20px;
  }

  .demo-refresh-container{
    width: 100%;
    height: 90%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
    position: relative;
    user-select: none;
  }

  .color{
    color: white;
    margin-bottom:15px;
  }


  .random_footer{
    padding-top: 10px;
    background-color: #d7dde4;
    width:100%}


  .cnjp {
    padding: 10px;
    font-size: 16px;
  }



</style>
