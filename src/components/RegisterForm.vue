<template>
  <div class="container h-100">
    <form @submit.prevent="pressed">
      <div class="row h-100">
        <div class="col-md-12 my-auto">
          <div class="card bg-dark text-center responsive-form w-50 mx-auto">
            <form class="card-body text-light">
              <div class="form-group row">
                <label for="username" class="col-sm-12 col-md-4 col-form-label">Username</label>

                <div class="col-sm-12 col-md-8">
                  <input
                    name="username"
                    type="text"
                    class="form-control"
                    id="username"
                    h-100
                    placeholder="username"
                    v-model="username"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="email" class="col-sm-12 col-md-4 col-form-label">Email</label>

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
                <label for="password" class="col-sm-12 col-md-4 col-form-label">Password</label>
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
                    class="btn btn-outline-success w-25"
                  >Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "signup",
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
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          const currUser = firebase.auth().currentUser;
          currUser.updateProfile({ displayName: this.username }).then(() => {
            console.log(currUser);
            firebase
              .firestore()
              .collection("users")
              .doc(currUser.uid)
              .set({
                email: currUser.email,
                username: currUser.displayName
              });
          });
        })
        .then(() => {
          this.$router.replace("/login");
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>
