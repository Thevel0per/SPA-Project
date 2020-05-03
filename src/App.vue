<template>
  <div id="app" class="h-100">
    <HeaderMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
import UserHandler from "./database/userHandler";

export default {
  name: "App",
  created: function() {
    UserHandler.addListener(this);
  },
  components: {
    HeaderMenu
  }
};
</script>
