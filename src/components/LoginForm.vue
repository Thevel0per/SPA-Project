<template>
  <div class="login-form ui container">
    <div class="ui inverted segment">
      <form class="ui inverted form">
        <div class="ui container">
          <div class="six wide field">
            <label for="username">Username</label>
            <input name="username" placeholder="Username" type="text" />
          </div>
          <div class="six wide field">
            <label for="password">Password</label>
            <input name="password" placeholder="Password" type="password" />
          </div>
          <div class="ui submit button">Login</div>
          <div class="login-form-link">
            <router-link to="/register">You don't have an account yet? Register Now!</router-link>
          </div>
          <div class="login-form-link">
            <router-link to="/register">Forgot your password? Let us get this sorted for you!</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-form {
  margin: 25px auto;
  text-align: center;
}

.field {
  margin: 1em auto !important;
}

.login-form-link {
  margin: 10px;
}
</style>
