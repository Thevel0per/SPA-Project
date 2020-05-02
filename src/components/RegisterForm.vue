<template>
  <div class="container h-100">
    <!-- <div v-if="error" class="error">{{error.message}}</div> -->
    <div class="row h-100">
      <div class="col-md-12 my-auto">
        <div class="card bg-dark text-center responsive-form w-50 mx-auto">
          <form class="card-body text-light">
            <div class="form-group row">
              <label for="username" class="col-sm-12 col-md-4 col-form-label">
                Username
              </label>

              <div class="col-sm-12 col-md-8">
                <input
                  name="username"
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="username"
                  v-model="username"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="email" class="col-sm-12 col-md-4 col-form-label">
                Email
              </label>

              <div class="col-sm-12 col-md-8">
                <input
                  name="email"
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="password" class="col-sm-12 col-md-4 col-form-label">
                Password
              </label>
              <div class="col-sm-12 col-md-8">
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <button
                  v-on:click="signUp"
                  type="submit"
                  class="btn btn-outline-success w-50"
                >
                  Register
                </button>
              </div>
              <div class="col-sm-12">
                <button
                  v-on:click="getRandomUserName"
                  class="btn btn-outline-success w-50"
                >
                  Generate Username
                </button>
              </div>
            </div>
          </form>
          <div class="register-form-links">
            <p>OR</p>
            <button
              v-on:click="loginWithProvider"
              type="submit"
              class="btn btn-outline-success w-50"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserHandler from "../database/userHandler";
import Providers from "../database/Providers.js";

export default {
  name: "register",
  data: function() {
    return {
      email: "",
      password: "",
      username: ""
    };
  },
  methods: {
    signUp(e) {
      e.preventDefault();
      UserHandler.register(
        this,
        this.email,
        this.password,
        this.username,
        this.$router
      );
    },
    loginWithProvider(e) {
      e.preventDefault();
      UserHandler.loginWithProvider(this, Providers.google, this.$router);
    },
    getRandomUserName() {
      this.username = "";
      fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(user => {
          this.username = user.results[0].login.username;
        });
    }
  }
};
</script>

<style scoped>
.register-form-links {
  color: white;
}

button {
  margin: 5px 0;
}
</style>
