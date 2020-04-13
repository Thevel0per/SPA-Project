<template>
  <div id="app">
    <HeaderMenu :loggedIn="loggedIn" />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";

export default {
  name: "App",
  data() {
    return {
      loggedIn: false
    };
  },
  components: {
    HeaderMenu
  }
};
</script>

<style>
</style>
