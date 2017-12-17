<template>

  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1_tab1" title="官方"/>
    <mu-tab value="tab1_tab2" title="专属"/>
  </mu-tabs>

  <div v-if="activeSubTab === 'tab1_tab1'">
    tab1_tab1
  </div>
  <div v-if="activeSubTab === 'tab1_tab2'">
    tab1_tab2
  </div>


</template>


<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        activeSubTab: 'tab1_tab1',
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


