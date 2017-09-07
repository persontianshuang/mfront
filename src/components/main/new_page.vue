<template>
  <div>



    <div>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="音乐"/>
        <mu-tab value="tab2" title="影视"/>
        <mu-tab value="tab3"  title="小说"/>
        <!--@active="handleActive"-->
      </mu-tabs>
      <div v-if="activeTab === 'tab1'">

        <div class="demo-infinite-container">
          <mu-list>
            <!--<template v-for="item in list">-->
              <!--<mu-list-item title="item"/>-->
              <!--<mu-divider/>-->
            <!--</template>-->

            <div>
              <img src="http://outka3xht.bkt.clouddn.com/acter.jpg" alt=""
              width="50%"
              >
            </div>


            <mu-list-item title="item1111"/>
            <mu-divider/>


            <mu-list-item title="item"/>
            <mu-divider/>

            <mu-list-item title="item"/>
            <mu-divider/>

            <mu-list-item title="item"/>
            <mu-divider/>

            <mu-list-item title="item"/>
            <mu-divider/>


            <mu-list-item title="item"/>
            <mu-divider/>
            <mu-list-item title="item"/>
            <mu-divider/><mu-list-item title="item"/>
            <mu-divider/><mu-list-item title="item"/>
            <mu-divider/><mu-list-item title="item"/>
            <mu-divider/><mu-list-item title="item"/>
            <mu-divider/><mu-list-item title="item"/>
            <mu-divider/><mu-list-item title="item"/>
            <mu-divider/><mu-list-item title="item"/>
            <mu-divider/><mu-list-item title="item"/>
            <mu-divider/><mu-list-item title="item"/>
            <mu-divider/><mu-list-item title="item"/>
            <mu-divider/><mu-list-item title="item"/>
            <mu-divider/><mu-list-item title="item"/>
            <mu-divider/>
            <mu-list-item title="item"/>
            <mu-divider/>




          </mu-list>

          <mu-back-top/>
          <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
        </div>


      </div>
      <div v-if="activeTab === 'tab2'">

      </div>
      <div v-if="activeTab === 'tab3'">
        <VideoDtails></VideoDtails>
      </div>
    </div>



  </div>
</template>


<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import VideoDtails from '../vedio/vedioList.vue'

  export default {
    data () {
      return {
        activeTab: 'tab2',
        tell_you: '谢谢你如此温柔'
      }
    },

    components: {
      VideoDtails
    },

    methods: {

//      app tabs
      handleTabChange (val) {
        this.activeTab = val
      },
      handleActive () {
        window.alert('tab active')
      }

    }
  }
</script>

<style>


  .demo-infinite-container{
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
  }

</style>
