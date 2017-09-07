<template>
    <div>

      <mu-paper class="cnjp">
        <mu-flat-button @click="jp"
                        label="日语字幕" class="demo-flat-button" primary/>
        <mu-flat-button @click="cn"
                        label="中文字幕" class="demo-flat-button" secondary/>
        <p v-if="sentence_jp" style="color: #7e57c2">{{sentence.jp}}</p>
        <p v-if="sentence_cn" style="color: #ff4081">{{sentence.cn}}</p>
      </mu-paper>




    </div>
</template>

<script>
  export default {
    props: ['sentence'],


    data () {
      return {
        sentence_jp: true,
        sentence_cn: false,
      }
    },

    methods: {
      jp() {
        this.sentence_jp = !this.sentence_jp
      },

      cn() {
        this.sentence_cn = !this.sentence_cn
      },
    }


  }


</script>


<style>
  .cnjp {
    padding: 10px;
    font-size: 16px;
  }
</style>
