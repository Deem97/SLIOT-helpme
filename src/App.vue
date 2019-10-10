<template>
  <v-app>
    <v-app-bar app dark  src="https://crwgeorgia.org/wp-content/uploads/2015/06/high-resolution-vintage-paper-backgrounds-free-download-.jpg" >
      <v-toolbar-title class="headline text-uppercase">
        <span>HelpMe</span>
        
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    //
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
  
};
</script>
