<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-md-12 my-auto">
        <div class="card bg-dark text-center responsive-form w-50 mx-auto">
          <form class="card-body text-light">
            <div v-if="picture != null">
              <img class="preview" :src="picture" />
              <br />
            </div>
            <div v-if="picture == ''">
              <img
                src="https://lh3.googleusercontent.com/proxy/i3cX1Rosr77nPRTe8N9IPsbIgfqW7pHHSGSyNO5wGQyCDer3m_Akr_rfPaylwsa6PMu1r6LCEdGKCyvvKk9dJlvHpZuwDfKKXii5X3vRcrB-Hctw4uSoqMaGg9ULOOC1AETTif1Sx2If7HI68EDP0WweCs38PRnVxcc-7A"
              />
            </div>
            <div class="form-part col-sm-12 col-md-6 center">
              <router-link
                to="/change_photo"
                tag="button"
                class="btn btn-outline-success w-100 btn-change-photo"
              >
                Change Photo
              </router-link>
            </div>
            <div class="form-group row">
              <div class="form-part col-sm-12 col-md-8">
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
              <div class="form-part col-sm-12 col-md-4">
                <button
                  v-on:click="changeEmail"
                  type="submit"
                  class="btn btn-outline-success w-100"
                >
                  Change
                </button>
              </div>
            </div>
            <div class="form-group row">
              <div class="form-part col-sm-12 col-md-8">
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="New password"
                  v-model="password"
                />
              </div>
              <div class="form-part col-sm-12 col-md-8">
                <input
                  name="repeatPassword"
                  type="password"
                  class="form-control"
                  id="repeatPassword"
                  placeholder="Repeat password"
                  v-model="repeatedPassword"
                />
              </div>
              <div class="form-part col-sm-12 col-md-4">
                <button
                  v-on:click="changePassword"
                  type="submit"
                  class="btn btn-outline-success w-100"
                >
                  Change
                </button>
              </div>
            </div>
            <div class="form-group row">
              <div class="form-part col-sm-12 col-md-8">
                <input
                  name="username"
                  type="username"
                  class="form-control"
                  id="username"
                  placeholder="New username"
                  v-model="username"
                />
              </div>
              <div class="form-part col-sm-12 col-md-4">
                <button
                  v-on:click="changeUsername"
                  type="submit"
                  class="btn btn-outline-success w-100"
                >
                  Change
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
import * as firebase from "firebase/app";
import "firebase/storage";

export default {
  name: "UserPanel",
  data: function() {
    return {
      email: "",
      password: "",
      repeatedPassword: "",
      username: "",
      picture: ""
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
  },
  mounted: function() {
    let thisRef = this;
    const storageRef = firebase.storage();

    storageRef
      .ref(`${this.$root.loggedUser.uid}/userPhoto`)
      .getDownloadURL()
      .then(function(url) {
        thisRef.picture = url;
      });
  }
};
</script>

<style scoped>
div.form-part {
  margin: 5px 0;
}
img.preview {
  width: 150px;
  border-radius: 10px;
}
img {
  width: 150px;
  border-radius: 10px;
}

.center {
  margin: auto !important;
  margin-top: 15px !important;
  margin-bottom: 10px !important;
}
</style>
