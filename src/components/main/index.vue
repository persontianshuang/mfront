<template>
  <v-app id="inspire">
    <v-navigation-drawer
      persistent
      clipped
      app
      v-model="drawer"
    >
      <main_toolbar></main_toolbar>
    </v-navigation-drawer>

    <v-toolbar
      color="deep-purple darken-1"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        初~ja
      </v-toolbar-title>


      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>


    <main_content></main_content>

    <v-footer color="deep-purple darken-1" class="white--text" app>
      <span>初~ja</span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>




  </v-app>
</template>

<script>
  import Content from './content/index'
  import Toolbar from './toolbar/index'

  export default {
    components: {
      'main_content': Content,
      'main_toolbar': Toolbar,
    },

    data: () => ({
      drawer: false,

    }),



  }
</script>
