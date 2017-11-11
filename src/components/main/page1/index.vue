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
  那昨天战况如何啊，看你买书，是不是昨天手速慢了些啊

  那试试所有的书都在京东自营买，
  或者所有的书都在一个店铺买，应该就可以享受满减
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
不要太气了，哈哈，你看天气今天都这么好。
那你发个你想买的书的清单，我看看怎么弄
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
就在淘宝上找到2个，没有试，那天你说你再找找啊
用nginx端口转发吗，那要个域名指向啊
</style>
