<template>
  <div>
    <!--{{playlist}}-->
    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->

    <mu-paper>
      <mu-list v-for="(item,index) in vediolist">
        <mu-list-item :to="{ name: 'vedio_dtails', params: { id: item._id }}"
                      :title="item.name">
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>

      </mu-list>
    </mu-paper>

    <p class="bg-danger note">
      本网站视频的字幕大部分来源来自诸神字幕组<br>
      遵守其<a href="">诸神发布资源可自由转载，但请务必保留字幕组信息，并附上本站原始链接出处</a>的约定<br>
      <a href="">本视频字幕来源</a><br>
      也希望大家多多支持诸神字幕组，真的是个超级超级良心的字幕组
    </p>



  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
      }
    },

    beforeMount () {
      this.getVediolist()

    },

    computed: {

      ...mapGetters([
        'vediolist',


      ]),
    },

    methods: {


      ...mapActions([

        'getVediolist' // 映射 this.increment() 为 this.$store.dispatch('increment')
      ]),


    },

    components: {

    }
  }

</script>

<style>
.note{
  padding: 4%;
}
</style>
