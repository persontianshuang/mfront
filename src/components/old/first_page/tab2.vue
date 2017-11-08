<template>
  <div>
    <div class="demo-grid">
      <mu-row gutter>
        <mu-col v-for="(item,index) in vediolist" width="50" tablet="50" desktop="33">

            <Icard :item=item></Icard>
        </mu-col>
      </mu-row>
    </div>


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


  .demo-grid div[class*="col-"] {

  }

</style>


