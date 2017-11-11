<template>
    <main>
      <v-content>

        <v-tabs dark fixed centered>
          <v-tabs-bar class="deep-purple lighten-4">
            <v-tabs-slider class="yellow"></v-tabs-slider>
            <v-tabs-item
              v-for="i in items"
              :key="i"
              :href="'#tab-' + i"
            >
              {{ i }}
            </v-tabs-item>
          </v-tabs-bar>
          <v-tabs-items>
            <v-tabs-content
              v-for="i in items"
              :key="i"
              :id="'tab-' + i"
            >
              <main_content_ta1></main_content_ta1>
            </v-tabs-content>
          </v-tabs-items>
        </v-tabs>


      </v-content>
    </main>


</template>

<script>
  import Tab1 from './tab1/index'

  export default {
    components: {
      'main_content_ta1': Tab1,
    },


    data: () => ({
      items: ['流', '收藏', 'Item Five'],
//      text: 'Lorem ipsum do'
    }),



  }
</script>
