<template>
    <div>
      <!--导航栏-->
      <mu-appbar :title="idSentence.flow_name+'   '+idSentence.sentence_Nx">
        <!--@click="back"-->
        <mu-icon-button icon="close" slot="left" to="/main"
                        />

      </mu-appbar>


        <!--文字区域-->
        <nx :sentence=idSentence></nx>



        <video ref="video"
               :src=idSentence.split_mp4_url
               controls
               autoPlay
               width="100%"

        ></video>

      <div>
        <mu-slider v-model="vedio_voice"
                   @change="speed"
                   :step="0.05" :max="1" :min="0.3" class="v_slider"/>
        <span style="float: right">语速</span>
      </div>

      <PreNext :sentence=idSentence></PreNext>




      <mu-bottom-nav class="random_footer">
        <!--iconClass-->
        <mu-bottom-nav-item class="color" value="recents" title="斩0" icon="flight takeoff"/>
        <mu-bottom-nav-item class="color" value="favorites" title="收藏" icon="favorite"/>
        <mu-bottom-nav-item class="color" value="nearby" :title=" '讨论'+ commentsList.length " icon="label"
                            :to="{ name: 'comments', params: { id: idSentence._id }}"

        />
      </mu-bottom-nav>





    </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'

  import Nx from '../comm/nx'
  import PreNext from '../comm/pre_next'
  import { loadNxChoose,saveHistory,loadHistory } from '../comm/cache'
  import storage from 'good-storage'

  export default {
    data () {
      return {

        vedio_voice: 0.6,
      }
    },

    components: {

      Nx,
      PreNext
    },

    beforeMount () {
      this.getThisSentence(this.$route.params.id)
    },

    computed: {

      ...mapGetters([
        'idSentence',
        'commentsList'
      ]),


    },

    mounted () {
      this.trigger = this.$el
    },

    beforeUpdate() {
      saveHistory(this.idSentence)
    },

    watch: {
      '$route': 'fetchData',
    },

    methods: {

      fetchData () {
        this.getThisSentence(this.$route.params.id)
//        console.log(this.idSentence)
        storage.set(this.idSentence['belongsto_flow'], this.idSentence['flow_id'])
      },

      back() {
        this.$router.go(-1)
      },

      speed() {
        this.$refs.video.playbackRate = this.vedio_voice
      },


      ...mapMutations({
//        setCurrentIndex: 'SET_CURRENT_INDEX',
      }),
      ...mapActions([
        'getThisSentence', // 映射 this.increment() 为 this.$store.dispatch('increment')

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

  .v_slider{
    width: 80%;
  }

</style>
