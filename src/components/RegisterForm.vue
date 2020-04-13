<template>
  <div class="register-form ui container">
    <div class="ui inverted segment">
      <form class="ui inverted form">
        <div class="ui container">
          <div class="six wide field">
            <label for="username">Username</label>
            <input name="username" placeholder="Username" type="text" />
          </div>
          <div class="six wide field">
            <label for="email">Email</label>
            <input name="email" placeholder="Email" type="email" />
          </div>
          <div class="six wide field">
            <label for="password">Password</label>
            <input name="password" placeholder="Password" type="password" />
          </div>
          <button type="submit" class="ui submit button">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm"
};
</script>

<style scoped>
.register-form {
  margin: 25px auto;
  text-align: center;
}

.field {
  margin: 1em auto !important;
}
</style>
