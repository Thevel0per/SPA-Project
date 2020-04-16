<template>
  <div class="w-100">
    <form class="sets-search-form">
      <div class="w-75 row mx-auto">
        <input
          class="form-control col-9 w-75 mx-auto"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <input
          class="btn btn-outline-success my-2 my-sm-0 offset-1 col-2"
          type="submit"
          value="Search"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>
