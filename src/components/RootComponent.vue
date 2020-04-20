<template>
  <div class="container justify-content-md-center h-100">
    <div class="row h-100">
      <div class="col-md-12 my-auto">
        <div class="jumbotron bg-dark text-light">
          <h1 class="display-4">Welcome to Total Fishks!</h1>
          <p class="lead">
            It's a simple, yet brilliant app that will help you memorize things.
          </p>
          <hr class="my-4 bg-light" />
          <div class="row">
            <div class="col-md-2">
              <router-link
                class="btn btn-outline-success btn-lg w-100"
                to="/login"
                role="button"
              >
                Login
              </router-link>
            </div>
            <div class="col-md-1 text-center my-auto">
              OR
            </div>
            <div class="col-md-2">
              <router-link
                class="btn btn-outline-success btn-lg w-100"
                to="/login"
                role="button"
              >
                Register
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
