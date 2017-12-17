<template>
  <div>

    <div>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="视频"/>
        <mu-tab value="tab2" title="音乐"/>
      </mu-tabs>

      <div v-if="activeTab === 'tab1'">
        <Page2Tab1></Page2Tab1>
        Page2Tab1
      </div>


      <div v-if="activeTab === 'tab2'">
        <Page2Tab1></Page2Tab1>

      </div>


    </div>



  </div>
</template>


<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'
  import  Page2Tab1 from './tab1/index'

  export default {
    data () {
      return {
        activeTab: 'tab1',


      }
    },

    components: {
      Page2Tab1,
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
