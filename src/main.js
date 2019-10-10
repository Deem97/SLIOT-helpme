import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import * as firebase from 'firebase'

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyALFJLvLjx_vCa1oIwfeTW0TwRycidB0B4",
      authDomain: "nodemcu1-26fc3.firebaseapp.com",
      databaseURL: "https://nodemcu1-26fc3.firebaseio.com",
      projectId: "nodemcu1-26fc3",
      storageBucket: "nodemcu1-26fc3.appspot.com",
      messagingSenderId: "606994986556",
      appId: "1:606994986556:web:b2856637bf25243148f539"
    })
  }
}).$mount("#app");
