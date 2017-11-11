<template>

  <!--<v-layout row wrap>-->
    <!--<main_content_ta1_card></main_content_ta1_card>-->
  <!--</v-layout>-->

  <v-flex xs12>
    <v-card color="cyan darken-2" class="white--text">
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs7>
            <div>
              <div class="headline">{{ header }}</div>
              <div>{{ text }}</div>
            </div>
          </v-flex>
          <v-flex xs5>
            <v-card-media
              :src="img"
              height="180px"
              contain
            ></v-card-media>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>


</template>


<script>


  export default {

    props: {

      header: String,
      text: String,
      img: String,
    },


    data () {
      return {
//        header: 'djsa',
//        text: 'asdjhsahda',
//        img: 'http://outka3xht.bkt.clouddn.com/kodoba.jpg',

      }
    },

    components: {

    },


    computed: {

    },



    methods: {

    }
  }
</script>

<style>


</style>


