<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-md-12 my-auto">
        <div class="card bg-dark text-center responsive-form w-50 mx-auto">
          <form class="card-body text-light">
            <div class="form-group row">
              <label for="email" class="col-sm-12 col-md-4 col-form-label"
                >E-mail</label
              >
              <div class="col-sm-12 col-md-8">
                <input
                  name="email"
                  type="text"
                  class="form-control"
                  id="email"
                  h-100
                  placeholder="email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="password" class="col-sm-12 col-md-4 col-form-label"
                >Password</label
              >
              <div class="col-sm-12 col-md-8">
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <button
                  v-on:click="login"
                  type="submit"
                  class="btn btn-outline-success w-50"
                >
                  Login
                </button>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <button
                  v-on:click="loginWithProvider"
                  type="submit"
                  class="btn btn-outline-success w-50"
                >
                  Login with Google
                </button>
              </div>
            </div>
          </form>
          <div class="login-form-link">
            <router-link to="/register"
              >You don't have an account yet? Register Now!</router-link
            >
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
  name: "login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      UserHandler.login(this, this.email, this.password, this.$router);
    },
    loginWithProvider(e) {
      e.preventDefault();
      UserHandler.loginWithProvider(this, Providers.google, this.$router);
    }
  }
};
</script>
