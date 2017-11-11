<template>
  <div>
    <div class="body">
      <div v-if="bottomNav === 'page1'">
        <Page1></Page1>
      </div>

      <div v-if="bottomNav === 'page2'">
        <Page2></Page2>
      </div>

      <div v-if="bottomNav === 'page3'">
        page3
      </div>

      <div v-if="bottomNav === 'page4'">
        <Page4></Page4>
      </div>
    </div>



    <mu-paper class="footer">
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item value="page1" title="私人" icon="ondemand_video"/>
        <mu-bottom-nav-item value="page2" title="流" icon="search"/>
        <mu-bottom-nav-item value="page3" title="待" icon="add"/>
        <mu-bottom-nav-item value="page4" title="设置" icon="edit"/>
      </mu-bottom-nav>
    </mu-paper>



  </div>
</template>


<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import Page1 from '../main/page1/index'
  import Page2 from '../main/page2/index'
  import Page4 from '../main/page4/index'


  export default {
    data () {
      return {
        open: false,
        docked: true,

        bottomNav: 'page1',
        bottomNavColor: 'movies',

      }
    },
忧伤，5块又是一本书
  阿加莎的《死亡约会》，里面也是波洛神探 应该挺不错的
  是啊，非常划算，而且快，我昨天晚上买的书，现在都就已经到了
  不是昨天电影结束，波洛去尼罗河了嘛，我就把后续故事的《尼罗河惨案》买了
  好美
  也就买了刚好到200满减
    components: {
      Page1,
      Page2,
      Page4
    },

    methods: {
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      },

      handleChange (val) {
        this.bottomNav = val
      },



    }
  }
</script>



<style>


  .body{
    padding-bottom: 50px;
  }


  .footer{
    padding: 0;
    position:fixed;
    background-color: #7e57c2;
    bottom:0;
    width:100%;

  }

</style>
