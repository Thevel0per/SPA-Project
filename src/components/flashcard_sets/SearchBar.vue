<template>
  <div class="ui search">
    <div class="ui icon input">
      <input class="prompt" type="text" placeholder="Search for flashcard sets..." />
      <i class="search icon"></i>
    </div>
    <div class="results"></div>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style>
.ui.search {
  width: 100%;
  text-align: center;
}

.ui.search .input {
  width: 75%;
}
</style>