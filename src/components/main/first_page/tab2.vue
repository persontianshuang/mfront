<template>
  <div>
      <span v-for="(item,index) in vediolist">
        <!--@click="to_sentence(item)"-->
        <Icard :item=item></Icard>


    </span>
  </div>
</template>


<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'
  import storage from 'good-storage'

  import Icard from '../../comm/item_card'



  export default {
    data () {
      return {

      }
    },

    components: {
      Icard,
    },

    beforeMount () {
      this.getVediolist()


    },


    computed: {

      ...mapGetters([
        'vediolist',
        'flowSentenceId'


      ]),
    },



    methods: {


      ...mapActions([

        'getVediolist',
        'getSentenceFromflow'
      ]),


    }
  }
</script>

<style>




</style>


