<template>
    <div>
      <!--导航栏-->
      <mu-appbar title="屠龙的火种早在这里点燃">
        <!--@click="back"-->
        <mu-icon-button icon="close" slot="left" to="/main"
        />

      </mu-appbar>


      <mu-text-field v-model="text_num" hintText="编号" /><br/>
      <h2>考题内容</h2>
      <mu-text-field v-model="text_value1" multiLine=true hintText="问题中的句子 ___ 用 $ 代替" /><br/>
      <mu-text-field v-model="text_value2" hintText="___ 里的单词 若没有 用 $ 代替" /><br/>
      <mu-text-field v-model="text_value3" hintText="该句子的翻译 可选" /><br/>

        <h2>选项</h2>
        <mu-text-field v-model="choose_value1" hintText="选项1"/><br/>
        <mu-text-field v-model="choose_value2" hintText="选项2"/><br/>
        <mu-text-field v-model="choose_value3" hintText="选项3"/><br/>
        <mu-text-field v-model="choose_value4" hintText="选项4"/><br/>



      <h2>
        <mu-radio label="1" name="choose_group" nativeValue="1" v-model="right_answer"  labelLeft class="demo-radio"/>
        <mu-radio label="2" name="choose_group" nativeValue="2" v-model="right_answer"  labelLeft class="demo-radio"/>
        <mu-radio label="3" name="choose_group" nativeValue="3" v-model="right_answer"  labelLeft class="demo-radio"/>
        <mu-radio label="4" name="choose_group" nativeValue="4" v-model="right_answer"  labelLeft class="demo-radio"/>

      </h2>

      <h2>
        <mu-radio label="N1" name="nx_group" nativeValue="N1" v-model="nx" labelLeft class="demo-radio"/>
        <mu-radio label="N2" name="nx_group" nativeValue="N2" v-model="nx"  labelLeft class="demo-radio"/>
        <mu-radio label="N3" name="nx_group" nativeValue="N3" v-model="nx"  labelLeft class="demo-radio"/>
        <mu-radio label="N4&N5" name="nx_group" nativeValue="N4" v-model="nx"  labelLeft class="demo-radio"/>


      </h2>

      <mu-snackbar v-if="toast" :message=mes @close="hideToast"/>

      <mu-text-field v-model="secret" hintText="我们的接头暗号是什么"/><br/>
      <mu-flat-button @click="submit"
                      label="提交" primary/>


    </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'
  import axios from 'axios'

  import Nx from '../comm/nx'
  import PreNext from '../comm/pre_next'
  import { loadNxChoose,saveHistory,loadHistory } from '../comm/cache'
  import storage from 'good-storage'

  export default {
    data () {
      return {
        text_num: '',
        text_value1: '',
        text_value2: '',
        text_value3: '待翻译',

        choose_value1: '',
        choose_value2: '',
        choose_value3: '',
        choose_value4: '',
        right_answer: '2',
        nx: 'N3',
        secret: '',

        toast: false,
        mes: '所有的我都要，一个都不能漏哦'


      }
    },

    components: {

    },

    beforeMount () {

    },

    computed: {

      ...mapGetters([

      ]),


    },

    mounted () {

    },

    beforeUpdate() {

    },



    methods: {

      hideToast () {
        this.toast = false
      },


      submit () {

//        this.toast = true

        let data = {
          text_num: this.text_num,
          text_value1: this.text_value1,
          text_value2: this.text_value2,
          text_value3: this.text_value3,
          choose_value1: this.choose_value1,
          choose_value2: this.choose_value2,
          choose_value3: this.choose_value3,
          choose_value4: this.choose_value4,
          right_answer: this.right_answer,
          nx: this.nx,
          secret: this.secret,
        }
        let all_have = true

        for (var prop in data) {
          if(data[prop]==''){
            all_have = false
          }
        }
        if(all_have){
          axios.post("http://0.0.0.0:8768/ntext/create",data

          )
            .then((response) => {
              console.log(response.data)
              if(response.data=='win'){
                this.mes = '成功啦  すごい'
                this.toast = true
                setTimeout(() => {this.toast = false},2000)
              }
              else {
                this.mes = '接头暗号可能不对哦'
                this.toast = true
                setTimeout(() => {this.toast = false},2000)
              }


            })
        }
        else {
          this.toast = true
        }



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



</style>
