<template>
  <div>
    <div class="body">
      <div v-if="bottomNav === 'first_page'">
        <FirstPage></FirstPage>
      </div>

      <div v-if="bottomNav === 'random'">
        <FirstPage></FirstPage>
      </div>

      <div v-if="bottomNav === 'new'">
        <NewPage></NewPage>
      </div>

      <div v-if="bottomNav === 'setting'">
        <Setting></Setting>
      </div>
    </div>



    <mu-paper class="footer">
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item value="first_page" title="斩" icon="ondemand_video"/>
        <mu-bottom-nav-item value="random" title="随机" icon="search"
                            to="/random"
        />
        <mu-bottom-nav-item value="new" title="斩什么" icon="add"/>
        <mu-bottom-nav-item value="setting" title="设置" icon="edit"/>
      </mu-bottom-nav>
    </mu-paper>



  </div>
</template>


<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import FirstPage from '../main/first_page'
  import NewPage from '../main/new_page'
  import Setting from '../settings/setting'

  export default {
    data () {
      return {
        open: false,
        docked: true,

        bottomNav: 'first_page',
        bottomNavColor: 'movies',

      }
    },

    components: {
      FirstPage,
      NewPage,
      Setting
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
