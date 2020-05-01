<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Total Fishks</router-link>
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
          <div class="col-md-1">
            <li class="nav-item active">
              <router-link class="nav-link" to="/flashcard_sets" v-if="!loggedIn">Flashcards</router-link>
            </li>
          </div>
          <div class="col-md-1">
            <li class="nav-item dropdown active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >My account</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/login" v-if="!loggedIn">Login</router-link>
                <router-link class="dropdown-item" to="/register" v-if="!loggedIn">Register</router-link>
                <router-link class="item" to="/userPanel" v-if="!loggedIn">My Account</router-link>

                <div class="dropdown-divider" v-if="loggedIn"></div>
                <router-link class="item right" to="/logout" v-if="loggedIn">Log out</router-link>
              </div>
            </li>
          </div>
          <div class="col-md-1">
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/flashcard_sets/new"
                v-if="loggedIn"
              >
                New Flashcards Set
              </router-link>
            </li>
          </div>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    loggedIn: Boolean
  },
  name: "HeaderMenu"
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
