<template>

  <div>
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1_tab1" title="官方"/>
    <mu-tab value="tab1_tab2" title="专属"/>
  </mu-tabs>

  <div v-if="activeTab === 'tab1_tab1'">
    tab1_tab1
  </div>
  <div v-if="activeTab === 'tab1_tab2'">
    tab1_tab2
  </div>
</div>

</template>


<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        activeTab: 'tab1_tab1',
      }
    },

    components: {

    },


    computed: {

    },



    methods: {
//      app tabs
      handleTabChange (val) {
        this.activeTab = val
      },
    }
  }
</script>

<style>


</style>


