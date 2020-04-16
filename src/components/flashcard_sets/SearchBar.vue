<template>
  <div class="col-md-9 mx-auto">
    <form class="form-inline my-2 my-lg-0">
      <input
        class="form-control w-75 mx-auto"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style>
.search {
  width: 100%;
  text-align: center;
}

.search .input {
  width: 75%;
}
</style>