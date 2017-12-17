<template>
  <div>

    <div>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="收藏"/>
        <mu-tab value="tab2" title="斩"/>
        <mu-tab value="tab3" title="流"/>
        <mu-tab value="tab4" title="专项训练"/>
      </mu-tabs>


      <div v-if="activeTab === 'tab1'">
        tab1
      </div>
      <div v-if="activeTab === 'tab2'">
        <Tab2></Tab2>
      </div>
      <div v-if="activeTab === 'tab3'">
        tab3
      </div>
      <div v-if="activeTab === 'tab4'">
        tab4
      </div>

    </div>



  </div>
</template>


<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'

  import Tab2 from './tab2/index'

  export default {
    data () {
      return {
        activeTab: 'tab2',
      }
    },

    components: {
      Tab2,
    },

    beforeMount () {

    },

    methods: {


//      app tabs
      handleTabChange (val) {
        this.activeTab = val
      },
      handleActive () {
        window.alert('tab active')
      },



    }
  }
</script>

<style>

</style>
