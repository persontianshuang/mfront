<template>
    <div>

      <mu-appbar :title="title" >
        <mu-icon-button icon="close" slot="left" @click="back"
        />
      </mu-appbar>




    </div>
</template>

<script>

  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'


  export default {
    props: ['title'],


    data () {
      return {

      }
    },

    methods: {

      back() {
        this.$router.go(-1)
      },

    }


  }


</script>


<style>

</style>
