<template>
  <div>

    <mu-appbar title="初~ja">
      <mu-icon-button icon="menu" slot="left"/>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="关于初~ja"
        href="https://zhuanlan.zhihu.com/p/27281361"/>
        <mu-menu-item title="关于我"
        href="https://www.zhihu.com/people/megyouhan"/>
      </mu-icon-menu>
    </mu-appbar>

    <div>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="history" title="历史"/>
        <mu-tab value="love" title="收藏"/>
        <mu-tab value="tab2" title="继续斩"/>
        <mu-tab value="tab3"  title="能力考"/>
        <!--@active="handleActive"-->
      </mu-tabs>
      <div v-if="activeTab === 'history'">


        <!--历史记录-->
        <mu-flat-button label="清除缓存" @click="history_clear" primary/>

        <mu-list v-for="(item,index) in history_list">
          <mu-list-item :to="{ name: 'id_sentence', params: { id: item.id }}"
                        :title="item.sentence">
          </mu-list-item>
          <mu-divider inset/>
        </mu-list>


      </div>

      <div v-if="activeTab === 'love'">


        <!--历史记录-->
        <mu-flat-button label="清除缓存" @click="love_clear" primary/>

        <mu-list v-for="(item,index) in love_list">
          <mu-list-item :to="{ name: 'id_sentence', params: { id: item.id }}"
                        :title="item.sentence">
          </mu-list-item>
          <mu-divider inset/>
        </mu-list>


      </div>


      <div v-if="activeTab === 'tab2'">
        <Tab2></Tab2>

      </div>
      <div v-if="activeTab === 'tab3'">
        <Tab3></Tab3>
      </div>
    </div>



  </div>
</template>


<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'

  import { loadNxChoose,saveHistory,loadHistory,clearHistory,
    loadFavorite,clearFavorite } from '../comm/cache'
//  import VideoDtails from '../vedio/vedioList.vue'
  import Tab2 from './first_page/tab2.vue'
  import Tab3 from './first_page/tab3.vue'

  export default {
    data () {
      return {
        activeTab: 'tab2',
        history_list: [],
        love_list: [],
      }
    },

    components: {
      Tab2,
      Tab3
    },

    beforeMount () {
      this.history_list = loadHistory()
      this.love_list = loadFavorite()

    },

    methods: {
      history_clear() {
        clearHistory()
      },

      love_clear() {
        clearFavorite()
      },

//      app tabs
      handleTabChange (val) {
        this.activeTab = val
      handleActive () {
        window.alert('tab active')
      },


      jp() {
        this.sentence_jp = !this.sentence_jp
      },


    }
  }
</script>

<style>


</style>
