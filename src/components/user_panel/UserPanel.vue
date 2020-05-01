<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-md-12 my-auto">
        <div class="card bg-dark text-center responsive-form w-50 mx-auto">
          <form class="card-body text-light">
            <div class="form-group row">
              <div class="col-sm-12 col-md-8">
                <input
                  name="email"
                  type="text"
                  class="form-control"
                  id="email"
                  h-100
                  placeholder="New email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <button
                  v-on:click="changeEmail"
                  type="submit"
                  class="btn btn-outline-success w-25"
                >
                  change
                </button>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12 col-md-8">
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="New password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12 col-md-8">
                <input
                  name="repeatPassword"
                  type="password"
                  class="form-control"
                  id="repeatPassword"
                  placeholder="Repeat password"
                  v-model="repeatedPassword"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <button
                  v-on:click="changePassword"
                  type="submit"
                  class="btn btn-outline-success w-25"
                >
                  change
                </button>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12 col-md-8">
                <input
                  name="username"
                  type="username"
                  class="form-control"
                  id="username"
                  placeholder="New username"
                  v-model="username"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <button
                  v-on:click="changeUsername"
                  type="submit"
                  class="btn btn-outline-success w-25"
                >
                  change
                </button>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <button
                  v-on:click="logout"
                  type="submit"
                  class="btn btn-outline-success w-25"
                >
                  Log out
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserHandler from "../../database/userHandler";

export default {
  name: "UserPanel",
  data: function() {
    return {
      email: "",
      password: "",
      repeatedPassword: "",
      username: ""
    };
  },
  methods: {
    changePassword(e) {
      e.preventDefault();
      UserHandler.changePassword(
        this.password,
        this.repeatedPassword,
        this.$router
      );
    },
    changeEmail(e) {
      e.preventDefault();
      UserHandler.changeEmail(this.email, this.$router);
    },
    changeUsername(e) {
      e.preventDefault();
      UserHandler.changeUsername(this.username, this.$router);
    },
    logout(e) {
      e.preventDefault();
      UserHandler.logout(this.$router);
    }
  }
};
</script>
