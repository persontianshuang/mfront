<template>
    <div>
        <!--文字区域-->
        <!--<nx :sentence=idSentence></nx>-->

      {{ sentence }}


    </div>
</template>

<script>
//  import {mapGetters, mapMutations} from 'vuex'
//  import { mapActions } from 'vuex'

  import { getSentence } from '@/components/api/sentence'



  export default {
    data () {
      return {

        sentence: {},

      }
    },



    beforeMount () {
//      this.getSentence(this.$route.params.id)
    },

    computed: {
    },

    mounted () {
      this.trigger = this.$el
    },

    beforeUpdate() {
//      saveHistory(this.idSentence)
    },

    watch: {
      '$route': 'fetchData',
    },

    methods: {

      fetchData () {
        this.getSentence(this.$route.params.id).then((res) => {

            this.sentence = res.data

        })


      },

      back() {
        this.$router.go(-1)
      },



    },

    components: {

    },

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
    background-color: #555555;
    width:100%
  }

  .cnjp {
    padding: 10px;
    font-size: 16px;
  }

  .v_slider{
    width: 80%;
  }

</style>
