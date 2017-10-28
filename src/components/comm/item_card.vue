<template>
  <div class="padcard">

    <mu-card>
      <a @click="to_sentence(item)">
        <mu-card-media :title=item.name :style="bg(item.img)"
                       class="card_img"
                       @click="to_sentence(item)">
        </mu-card-media >
      </a>

      <mu-card-title subTitle="新的更新"/>

      <mu-card-actions>
        <mu-flat-button label="继续" primary
                        @click="to_sentence(item)"/>
        <mu-flat-button label="选择" primary/>
      </mu-card-actions>
    </mu-card>


  </div>


</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'

  import storage from 'good-storage'

  export default {
    props: ['item'],
//    props: {
//      title: String,
////      subTitle: String,
//      img: String,
//      item:
//    },


    data () {
      return {


      }
    },

    methods: {
      bg(data) {
        return {
            background: "url('"+ data  +"') center / cover",
        }
      },


      to_sentence (item){
        console.log(storage.get(item['_id'],'1'))
        this.getSentenceFromflow({'id': item['_id'].toString(),'index':storage.get(item['_id'],"1")})
          .then((response) => {
            this.$router.push({ name: 'id_sentence', params: { id: response.data['sentence_id'] }})

          })

      },


      ...mapActions([
        'getSentenceFromflow'
      ]),



    }


  }


</script>


<style>

  .padcard{
    padding-bottom: 18px;

  }

  .card_img{
    height: 250px;
    width: 100%;
    /*background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center / cover;*/
    border-radius: 1%;
  }

</style>
