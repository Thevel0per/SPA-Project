<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/" v-if="!this.$root.loggedUser">
      Total Fishks
    </router-link>
    <div class="navbar-brand" v-else>Total Fishks</div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto container">
        <div class="row justify-content-md-center">
          <div class="col-md-2 col-lg-2">
            <li class="nav-item active">
              <router-link
                class="nav-link"
                to="/flashcard_sets"
                >Flashcards</router-link
              >
            </li>
          </div>
          <div class="col-md-2 col-lg-2">
            <li class="nav-item dropdown active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >My account</a
              >
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link
                  class="dropdown-item"
                  to="/login"
                  v-if="!this.$root.loggedUser"
                >
                  Login
                </router-link>
                <router-link
                  class="dropdown-item"
                  to="/register"
                  v-if="!this.$root.loggedUser"
                >
                  Register
                </router-link>
                <router-link
                  class="dropdown-item"
                  to="/userPanel"
                  v-if="this.$root.loggedUser"
                >
                  User Panel
                </router-link>
                <div
                  class="dropdown-divider"
                  v-if="this.$root.loggedUser"
                ></div>
                <button
                  @click="logout"
                  class="dropdown-item"
                  v-if="this.$root.loggedUser"
                >
                  Log out
                </button>
              </div>
            </li>
          </div>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
import UserHandler from "../database/userHandler";

export default {
  name: "HeaderMenu",
  methods: {
    logout(e) {
      e.preventDefault();
      UserHandler.logout(this.$router);
      this.$root.loggedUser = null;
      this.$router.replace("/");
    }
  }
};
</script>

<style scoped>
div.row {
  width: 100%;
}

div.col-md-1 {
  margin: 0 1%;
}
</style>
