<template>
    <div>
      <!--导航栏-->
      <mu-appbar title="屠神">
        <mu-icon-button icon="close" slot="left"
                        to="/main"/>
      </mu-appbar>








    </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'


  export default {
    data () {
      return {

        vedio_voice: 0.8,
      }
    },

    components: {

    },

    beforeMount () {
      this.getRandomSentence(loadNxChoose())
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



    methods: {


      speed() {
        this.$refs.video.playbackRate = this.vedio_voice
      },






      ...mapMutations({
//        setCurrentIndex: 'SET_CURRENT_INDEX',
      }),
      ...mapActions([
        // 映射 this.increment() 为 this.$store.dispatch('increment')

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



</style>
