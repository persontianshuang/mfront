<template>

  <div>
  <mu-appbar title="评论" >
    <mu-icon-button icon="close" slot="left" @click="back"
    />
  </mu-appbar>



    <div>
      <mu-text-field  v-model="input_text"
        hintText="0是过去 1是未来 现在无迹可寻" :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow" multiLine :rows="3" :rowsMax="6" :maxLength="50"/><br/>

      <mu-icon-button icon="send" slot="right"
      @click="post_comment"
      />
    </div>
  <mu-list v-for="(item,index) in commentsList">

    <mu-list-item :title=item>
      <mu-avatar src="http://outka3xht.bkt.clouddn.com/acter.jpg" slot="leftAvatar"/>
      <mu-icon-button icon="reply" slot="right"/>
    </mu-list-item>

  </mu-list>


  </div>

</template>

<script>

  import {mapGetters, mapMutations} from 'vuex'
  import { mapActions } from 'vuex'

  export default {

    data () {
      return {
        input_text: '',

        multiLineInput: '',
        multiLineInputErrorText: ''

      }
    },


    beforeMount () {
      this.getComment(this.$route.params.id)
    },

    computed: {
      ...mapGetters([
        'commentsList',
      ]),
    },

    watch: {
      '$route': 'fetchData',
    },

    methods: {
      back() {
        this.$router.go(-1)
      },
      fetchData () {
        this.getComment(this.$route.params.id)
      },

      post_comment () {
        this.postComment({'id':this.$route.params.id,'content':this.input_text})
        this.getComment(this.$route.params.id)
      },

      handleMultiLineOverflow (isOverflow) {
        this.multiLineInputErrorText = isOverflow ? '不要这么爱我，好吗' : ''
      },

      ...mapActions([
        'getComment',
        'postComment'
      ]),



    }

  }


</script>


<style>

</style>
