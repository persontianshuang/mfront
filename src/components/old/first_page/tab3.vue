<template>
  <div>
      <span v-for="(item,index) in ntext_list">
        <!--{{item}}-->

        <mu-list-item :to="{ name: 'ntext_use', params: { id: item._id }}"
                      :title="item.text_num + '. '+ item.text_value1">
        </mu-list-item>
        <mu-divider inset/>

    </span>
  </div>
</template>


<script>
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'
  import axios from 'axios'

  export default {
    data () {
      return {
        tell_you: '谢谢你如此温柔',
        ntext_list: []
      }
    },

    components: {

    },

    beforeMount () {
//      'http://123.206.220.149:8768'  'http://0.0.0.0:8768'
      const root_url = 'http://123.206.220.149:8768'
      axios.get(root_url + '/ntext/all')
        .then((response) => {
           this.ntext_list = response.data
        })

    },


    computed: {

      ...mapGetters([


      ]),
    },



    methods: {

      ...mapActions([

      ]),


    }
  }
</script>

<style>


</style>
