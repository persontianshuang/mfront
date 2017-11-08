<template>
    <div>


      <!--导航栏-->
      <mu-appbar title="个性化设置">
        <mu-icon-button icon="close" slot="left"
                        to="/main"/>

      </mu-appbar>


    <mu-paper>
      <mu-list>
    <!-- chooseNx  选择适合你的句子 -->
        <mu-list-item title="选择适合你的句子" >
          <div v-for="(item,index) in chooseNx">
            <mu-switch :label="item.Nx" v-model="item.status" class="demo-switch"
            @input='switch_nx'
            /><br/>
          </div>

        </mu-list-item>


      </mu-list>
    </mu-paper>




    </div>
</template>

<script>

  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'
// import { loadNxChoose } from './comm/cache'
    import storage from 'good-storage'

    export default {
      data () {
        return {
          nx:[
    { 'status': false, 'Nx': 'N1' },
    { 'status': false, 'Nx': 'N2' },
    { 'status': true, 'Nx': 'N3' },
    { 'status': true, 'Nx': 'N4' },
    { 'status': true, 'Nx': 'N5' },
],
          toggle: true,
          value: 'simple2',
          dialog: false
        }
      },

      computed: {

        ...mapGetters([

           'chooseNx',
        ]),


      },

      methods: {
        switch_nx (){
//           console.log(this.chooseNx)
           storage.set('__nx__',this.chooseNx)
        },

      ...mapActions([
//        'getRandomSentence',
      ]),




      }
    }


</script>


<style>
  .demo-switch {
    margin-bottom: 16px;
  }


  .demo-radio {
    margin-bottom: 16px;
  }



  .container{
  display: flex;
}
</style>
