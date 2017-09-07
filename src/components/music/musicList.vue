<template>
  <div>

    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->

    <mu-list v-for="(item,index) in musiclist">
      <mu-list-item :to="{ name: 'music_dtails', params: { id: item.id }}"
                    :title="item.name">

      </span>
        <!--<mu-icon-menu slot="right" icon="more_vert" tooltip="操作">-->
          <!--<mu-menu-item title="回复" />-->
        </mu-icon-menu>

      </mu-list-item>
      <mu-divider inset/>

    </mu-list>

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
      this.getMusiclist()

    },

    computed: {

      ...mapGetters([
        'musiclist'
      ]),
    },

    methods: {

      ...mapActions([
        'getMusiclist' // 映射 this.increment() 为 this.$store.dispatch('increment')
      ]),


    },

    components: {

    }
  }

</script>

<style>

</style>
