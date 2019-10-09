<template>
    <v-content>
      <Dashboard />
    </v-content>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Dashboard from "./components/Dashboard";
export default {
  name: "App",
  components: {
    HelloWorld,
    Dashboard
  },
  data: () => ({
    //
  })
};
</script>
