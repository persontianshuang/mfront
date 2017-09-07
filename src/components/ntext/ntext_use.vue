<template>
    <div>


      <!--导航栏-->
      <mu-appbar title="能力考真题训练 刷题版">
        <!--@click="back"-->
        <mu-icon-button icon="close" slot="left" to="/main"
        />

      </mu-appbar>



      <h2 v-html="ntext.text_num+'. '+ntext.text_value1"></h2>



        <mu-radio :label="ntext.choose_value1" name="group2" nativeValue="choose1" v-model="choose" /> <br>
        <mu-radio :label="ntext.choose_value2" name="group2" nativeValue="choose2" v-model="choose"  /> <br>
        <mu-radio :label="ntext.choose_value3" name="group2" nativeValue="choose3" v-model="choose"  /> <br>
        <mu-radio :label="ntext.choose_value4" name="group2" nativeValue="choose4" v-model="choose"  /> <br>




      <!--<mu-flat-button @click="pre"-->
                      <!--label="提示" secondary/>-->
      <mu-flat-button @click="submit"
                      label="提交" primary/>

      <mu-snackbar v-if="toast" message="在今后的人生里 一定有更适合你的哦" @close="hideToast"/>

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
        choose: 'choose1',
        toast: false
      }
    },

    components: {

    },

    beforeMount () {
      this.getNtext(this.$route.params.id)
    },

    computed: {

      ...mapGetters([
        'ntext'
      ]),


    },

    mounted () {

    },

    beforeUpdate() {

    },


    watch: {
      '$route': 'fetchData',
    },
    methods: {

      fetchData () {

        this.getNtext(this.$route.params.id)

//        storage.set(this.idSentence['belongsto_flow'], this.idSentence['flow_id'])
      },

      submit () {
        if(this.choose!='choose'+this.ntext.right_answer){
          this.toast = true

          setTimeout(() => {this.toast = false},2000)
        }
        else{

          this.$router.push({ name: 'ntext_dtails', params: { id: this.ntext['_id'] }})
        }

      },

      hideToast () {
        this.toast = false
      },




      ...mapMutations({
//        setCurrentIndex: 'SET_CURRENT_INDEX',
      }),
      ...mapActions([
        'getNtext'

      ]),



    }



  }


</script>


<style>



</style>
