<template>
  <div class="header-menu">
    <div class="ui item menu inverted three">
      <div class="ui container">
        <router-link class="item" to="/flashcard_sets" v-if="!loggedIn">Flashcards</router-link>
        <router-link class="item" to="/login" v-if="!loggedIn">Login</router-link>
        <router-link class="item" to="/register" v-if="!loggedIn">Register</router-link>
        <router-link class="item" to="/register" v-if="loggedIn">My Account</router-link>
        <router-link class="item right" to="/logout" v-if="loggedIn">Log out</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loggedIn: Boolean
  },
  name: "HeaderMenu"
};
</script>

<style>
.icon-b {
  background: url("../assets/favicon.jpg");
  width: 20px;
  display: block;
}

.brand-logo {
  width: 100px !important;
  height: 100%;
}
</style>
