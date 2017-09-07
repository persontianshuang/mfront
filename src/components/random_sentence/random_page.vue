<template>
    <div>
      <!--导航栏-->
      <mu-appbar title="路人女主">
        <mu-icon-button icon="close" slot="left"/>
        <mu-icon-button icon="send" slot="right"
                        :to="{ name: 'vedio_dtails', params: { id: randomSentence.belongsto_flow }}"
        />
      </mu-appbar>

      <mu-slider v-model="vedio_voice"
                 @change="speed"
                 :step="0.05" :max="1" class="demo-slider"/>

      <div class="demo-refresh-container">
        <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>

        <!--文字区域-->
        <nx :sentence=randomSentence></nx>



        <!--<video ref="video"-->
               <!--:src=randomSentence.split_mp4_url-->
               <!--controls-->
               <!--autoPlay-->
               <!--width="100%"-->

        <!--&gt;</video>-->


        <cnjp :sentence=randomSentence></cnjp>


      </div>




        <mu-bottom-nav class="footer">
          <!--iconClass-->
          <mu-bottom-nav-item class="color" value="recents" title="1" icon="flight takeoff"/>
          <mu-bottom-nav-item class="color" value="favorites" title="收藏" icon="favorite"/>
          <mu-bottom-nav-item class="color" value="nearby" title="评论" icon="label"/>
        </mu-bottom-nav>



    </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'
  import Cnjp from '../comm/show_cnjp'
  import Nx from '../comm/nx'

  export default {
    data () {
      return {
        refreshing: false,
        trigger: null,

        vedio_voice: 1,
      }
    },

    components: {
      Cnjp,
      Nx,
    },

    beforeMount () {
      this.getRandomSentence()
    },

    computed: {

      ...mapGetters([
        'randomSentence',

      ]),


    },

    mounted () {
      this.trigger = this.$el
    },



    methods: {
      refresh () {
        this.refreshing = true
        this.getRandomSentence()
        console.log('a')
        this.refreshing = false
      },


      speed() {
        this.$refs.video.playbackRate = this.vedio_voice
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


  .footer{
    position:fixed;
    background-color: #7e57c2;
    bottom:0;

    width:100%}



</style>
