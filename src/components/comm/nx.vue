<template>
  <div>



    <!--文字区域-->
    <mu-paper class="sentence">
          <span v-for="(item,index) in sentence.words_list">

          <ruby :class="item.word_Nx" @click="to_word(item)">
            {{item.word_mecab[0]}}

            <rt v-if="item.word_mecab[0]!=item.word_mecab[10] && is_speak" class="rt">
              {{item.word_mecab[11]}}
            </rt>



          </ruby>
            <span> &nbsp </span>
           </span>
      <mu-icon value="flight_takeoff" color="red" @click="cn" />
      <mu-icon value="flight_takeoff" color="#7e57c2" @click="do_speak"/>

      <p v-if="is_chinese" style="color: #7e57c2">{{sentence.cn}}</p>
    </mu-paper>






  </div>
</template>

<script>
  export default {
    props: ['sentence'],


    data () {
      return {
        is_chinese: false,
        is_speak: true,

      }
    },

    methods: {

      cn() {
        this.is_chinese = !this.is_chinese
      },


      do_speak() {
        this.is_speak = !this.is_speak
      },

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
