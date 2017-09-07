<template>
    <div>

      <mu-paper class="cnjp">
        <p style="color: #7e57c2">{{sentence.jp}}</p>
        <mu-flat-button @click="pre"
                        label="上一句" class="demo-flat-button" primary/>
        <mu-flat-button @click="next"
                        label="下一句" class="demo-flat-button" secondary/>


      </mu-paper>




    </div>
</template>

<script>

  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'


  export default {
    props: ['sentence'],


    data () {
      return {

      }
    },

    methods: {
      ...mapActions([
        'getSentenceFromflow'
      ]),

      pre() {
        this.getSentenceFromflow({'id': this.sentence['belongsto_flow'].toString(),'index':this.sentence['flow_id']-1})
          .then((response) => {
            this.$router.push({ name: 'id_sentence', params: { id: response.data['sentence_id'].toString() }})

          })
      },
      next() {
        this.getSentenceFromflow({'id': this.sentence['belongsto_flow'].toString(),'index':this.sentence['flow_id']+1})
          .then((response) => {
            this.$router.push({ name: 'id_sentence', params: { id: response.data['sentence_id'].toString() }})

          })

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
