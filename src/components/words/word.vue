<template>
  <div>

    <Back :title="wordMeaning.this_word +'  ' + wordMeaning.Nx "></Back>

    <!--单词详情-->
    <mu-paper class="sentence">
      <p>
      <p>
        属于： {{wordMeaning.Nx}} &nbsp |&nbsp
        发音：<a href="">  {{wordMeaning.speak}} </a> <br>
        原形：  <a href="">  {{wordMeaning.raw_word}}  </a>  &nbsp |&nbsp
        该句：<a href="">  {{wordMeaning.this_word}} </a> <br>

      {{wordMeaning.tag}}
      </a>
      </p>

      释义： <br>
      <p class="bg-info"  style="padding: 1%">
        {{ wordMeaning.meaning }}
      </p>

      更多词典查询：<br>
      <p>
        <a :href="['http://dict.hjenglish.com/jp/jc/' + wordMeaning.raw_word]"> 沪江  </a>
        &nbsp |&nbsp
        <a :href="['http://jisho.org/search/' + wordMeaning.raw_word]"> jisho  </a>  <br>
        <a :href="['http://www.gavo.t.u-tokyo.ac.jp/ojad/search/index/sortprefix:accent/narabi1:kata_asc/narabi2:accent_asc/narabi3:mola_asc/yure:visible/curve:fujisaki/details:invisible/limit:20/word:' + wordMeaning.raw_word]"> 音调及变形  </a>
        &nbsp |&nbsp
        <a :href="['http://tangorin.com/examples/' + wordMeaning.raw_word]"> 例句  </a>  <br>
      </p>
      </p>

      <p>含有有该单词的句子：</p>
      <mu-list v-for="(item,index) in wordMeaning.sentences">
        <mu-list-item  :to="{ name: 'id_sentence', params: { id: item.id }}"
                      :title="item.content">
        </mu-list-item>
        <mu-divider inset/>
      </mu-list>



    </mu-paper>

  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'

  import Back from '../comm/back'

  export default {
    props: ['sentence'],


    data () {
      return {

      }
    },

    components: {
      Back
    },


    beforeMount () {
      this.getWordMeaning(this.$route.params.id)
//      console.log(this.$route.params.id)
    },

    computed: {
      ...mapGetters([
        'wordMeaning',

      ]),
    },
    watch: {
      '$route': 'fetchData',
    },

    methods: {

      fetchData () {
        this.getWordMeaning(this.$route.params.id)
      },

      ...mapActions([
        'getWordMeaning', // 映射 this.increment() 为 this.$store.dispatch('increment')

      ]),

    }


  }


</script>


<style>
  .N1{
    background-color: gainsboro;
  }
  .N2{
    background-color: lightpink;
  }
  .N3{
    background-color: #FEFFC6;
  }
  .N4{
    background-color: #DAFFC6;
  }
  .N5{
    background-color: #C6EBFF;
  }

  .S0{
    background-color: rgba(190, 184, 235, 1);
  }

  .S1{
    background-color: rgba(190, 184, 235, 1);
  }



  .sentence{
    padding: 15px;
    color: #2c3e50;
    font-size: 20px;
  }

  .rt{
    color: #f890b0;
  }
</style>
