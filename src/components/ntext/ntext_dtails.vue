<template>
    <div>


      <!--导航栏-->
      <mu-appbar title="能力考真题训练 解析版">
        <!--@click="back"-->
        <mu-icon-button icon="close" slot="left" to="/main"
        />

      </mu-appbar>


        <!--文字区域-->
        <nx :sentence=ntext.from_sentence></nx>
      <mu-paper class="sentence">
        <SimpleNx :sentence=ntext.choose_value1_ref choose_index="1"></SimpleNx>
        <SimpleNx :sentence=ntext.choose_value2_ref choose_index="2"></SimpleNx>
        <SimpleNx :sentence=ntext.choose_value3_ref choose_index="3"></SimpleNx>
        <SimpleNx :sentence=ntext.choose_value4_ref choose_index="4"></SimpleNx>
      </mu-paper>


    </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'

  import Nx from '../comm/nx'
  import SimpleNx from '../comm/simple_nx'
//  import PreNext from '../comm/pre_next'
//  import { loadNxChoose,saveHistory,loadHistory } from '../comm/cache'
//  import storage from 'good-storage'

  export default {
    data () {
      return {

      }
    },

    components: {

      Nx,
      SimpleNx
    },

    beforeMount () {

      this.getNtext(this.$route.params.id)
      this.getThisSentence("59ad6d0bd9f092134393da09")
    },

    computed: {

      ...mapGetters([
//        'commentsList'
        'idSentence',
        'ntext'
      ]),


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

        this.getNtext(this.$route.params.id)

//        storage.set(this.idSentence['belongsto_flow'], this.idSentence['flow_id'])
      },

      back() {
        this.$router.go(-1)
      },


      to_word(item) {
//        console.log(item['word_id'])
        this.$router.push({ name: 'word', params: { id: item['word_id']}})
      },

      ...mapMutations({
//        setCurrentIndex: 'SET_CURRENT_INDEX',
      }),
      ...mapActions([
        'getNtext', // 映射 this.increment() 为 this.$store.dispatch('increment')
        'getThisSentence'

      ]),



    }



  }


</script>


<style>



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

  .sentence{
    /*background-color: #c6ebff;*/
    padding: 15px;
    color: #2c3e50;
    font-size: 20px;
  }

</style>
