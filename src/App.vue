<template>
  <div id="app">
    <!--<mu-appbar title="初~ja">-->
      <!--<mu-raised-button label="初~ja" @click="toggle(true)"/>-->
    <!--</mu-appbar>-->

    <!--<mu-drawer :open="open" :docked="docked" @close="toggle()">-->
      <!--<mu-appbar title="初~ja"/>-->
      <!--<mu-list @itemClick="docked ? '' : toggle()">-->
        <!--<mu-list-item to="/vedio" title="动漫~日剧总有你想学的"/>-->
        <!--&lt;!&ndash;<mu-list-item to="/music" title="从学会第一首日语歌开始"/>&ndash;&gt;-->
        <!--<mu-list-item to="/random" title="随机总是充满惊喜"/>-->
        <!--&lt;!&ndash;<mu-list-item to="/setting" title="设置"/>&ndash;&gt;-->
        <!--<mu-list-item v-if="docked" @click.native="open = false" title="Close"/>-->
      <!--</mu-list>-->
    <!--</mu-drawer>-->
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!--keep-alive组件用来缓存组件,避免多次加载相应的组件,减少性能消耗-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>



    <!--<p class="bg-info footer">-->
      <!--点击 初~ja 用你喜欢的方式开启你的日语学习<br>-->
      <!--<a href="https://www.zhihu.com/people/megyouhan">关于我</a> |-->
      <!--<a href="https://zhuanlan.zhihu.com/p/27281361">关于本网站</a>-->

    <!--</p>-->

  </div>
</template>


<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    data () {
      return {
        open: false,
        docked: true
      }
    },

    methods: {
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      }
    },
    components: {

    }
  }
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 20px;*/
}



h2 {
  font-size: 22px;
  color: #555;
}
.banner{
  padding: 3%;
}

.footer{
  padding: 3%
}


</style>
