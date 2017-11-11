<template>

  <v-container
    fluid
    style="min-height: 0;"
    grid-list-lg
  >
    <v-layout row wrap>
      <main_content_tab1_card
      header="me"
      text="measdasdas"
      img="http://outka3xht.bkt.clouddn.com/kodoba.jpg"
      ></main_content_tab1_card>
    </v-layout>

  </v-container>

</template>


<script>
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'

  import Card from './card'
  import { getFlow } from '@/components/api/flow'


  export default {

    components: {
      'main_content_tab1_card': Card,
    },

    data () {
      return {

      }
    },

    beforeMount () {
      getFlow()
    },

    computed: {

    },



    methods: {
      gf() {
        return getFlow()
      }
    }
  }
</script>

<style>


</style>


