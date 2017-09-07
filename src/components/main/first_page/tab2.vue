<template>
  <div>
      <span v-for="(item,index) in vediolist">

        <!--<a href="#/random">-->
        <span class="img">
          <img :src="item.img" alt=""  width="49%" @click="to_sentence(item)">
        </span>

        <!--</a>-->

    </span>
  </div>
</template>


<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'
  import storage from 'good-storage'



  export default {
    data () {
      return {
        tell_you: '谢谢你如此温柔',
      }
    },

    components: {

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
      to_sentence (item){
        console.log(storage.get(item['_id'],'1'))
        this.getSentenceFromflow({'id': item['_id'].toString(),'index':storage.get(item['_id'],"1")})
         .then((response) => {
           this.$router.push({ name: 'id_sentence', params: { id: response.data['sentence_id'] }})

         })

      },

      ...mapActions([

        'getVediolist',
        'getSentenceFromflow'
      ]),


    }
  }
</script>

<style>

.img{
  width: 49%;
  /*position: fixed;*/
  /*overflow: hidden;*/
  /*height: ;*/
}
</style>
