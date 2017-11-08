<template>
  <div>

    <!--<mu-appbar title="初~ja">-->
      <!--<mu-icon-button icon="menu" slot="left"/>-->
      <!--<mu-icon-menu icon="more_vert" slot="right">-->
        <!--<mu-menu-item title="关于初~ja"-->
        <!--href="https://zhuanlan.zhihu.com/p/27281361"/>-->
        <!--<mu-menu-item title="关于我"-->
        <!--href="https://www.zhihu.com/people/megyouhan"/>-->
      <!--</mu-icon-menu>-->
    <!--</mu-appbar>-->

    <div>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="收藏"/>
        <mu-tab value="tab2" title="斩"/>
        <mu-tab value="tab3" title="专项训练"/>
      </mu-tabs>


      <div v-if="activeTab === 'tab1'">
        tab1
      </div>
      <div v-if="activeTab === 'tab2'">
        tab2
      </div>
      <div v-if="activeTab === 'tab3'">
        tab3
      </div>


    </div>



  </div>
</template>


<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'


  export default {
    data () {
      return {
        activeTab: 'tab2',
        history_list: [],
        love_list: [],
      }
    },

    components: {

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
