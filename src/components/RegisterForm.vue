<template>
  <div class="container justify-content-md-center h-100">
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
                  h-100
                  placeholder="Username"
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
                  h-100
                  placeholder="Email"
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
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <button type="submit" class="btn btn-outline-success w-25">
                  Register
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
export default {
  name: "RegisterForm"
};
</script>
