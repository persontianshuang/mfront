<template>
  <div>

    <!--<span v-if="index!='0'">-->
    {{choose_index}}.
    <!--</span>-->

        <span v-for="(item,index) in sentence.words_list">



        <ruby :class="item.word_Nx" @click="to_word(item)">
          {{item.word_mecab[0]}}

          <rt v-if="item.word_mecab[0]!=item.word_mecab[10] && is_speak" class="rt">
            {{item.word_mecab[11]}}
          </rt>



        </ruby>
          <span> &nbsp </span>
         </span>


  </div>
</template>

<script>
  export default {
    props: ['sentence','choose_index'],
//    props: {
//      // 只检测类型
//      index: Number,
//      sentence: ,
//    },


    data () {
      return {


      }
    },

    methods: {

      to_word(item) {
//        console.log(item['word_id'])
        this.$router.push({ name: 'word', params: { id: item['word_id']}})
      }



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
    /*background-color: #c6ebff;*/
    padding: 15px;
    color: #2c3e50;
    font-size: 20px;
  }

  .rt{
    color: #f890b0;
  }
</style>
