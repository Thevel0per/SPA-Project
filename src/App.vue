<template>
  <div id="app" class="h-100">
    <HeaderMenu :loggedIn="loggedIn" />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
import UserHandler from "./database/userHandler";

export default {
  name: "App",
  data() {
    return {
      loggedIn: false
    };
  },
  created: function() {
    UserHandler.addListener();
  },
  components: {
    HeaderMenu
  }
};
</script>
