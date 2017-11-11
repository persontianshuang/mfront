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

  </div>
</template>


<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'


  export default {
    data () {
      return {

      }
    },

    components: {

    },

    beforeMount () {


    },

    methods: {


    }
  }
</script>

<style>


</style>
