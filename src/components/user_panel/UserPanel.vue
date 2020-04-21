<template>
  <div class="row flashcards-sets-content">
    <div class="col-md-3">
      <nav class="side-menu h-100">
        <div class="row h-100">
          <div
            class="col-md-6 offset-md-1 my-auto card bg-light text-light h-25"
          >
            <div class="row card bg-dark my-auto">DUpa</div>
          </div>
        </div>
      </nav>
    </div>
    <div class="col-md-6">
      <div class="row">
        <SearchBar />
      </div>
      <div class="row" v-for="(set, index) in flashcardSets" :key="index">
        <FlashcardSetCard :flashcardSet="set" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../shared/SearchBar.vue";
import FlashcardSetCard from "../shared/FlashcardSetCard.vue";

export default {
  name: "UserPanel",
  components: {
    SearchBar,
    FlashcardSetCard
  },
  data() {
    return {
      flashcardSets: []
    };
  },
  mounted: function() {
    this.$root.db.flashcardsSets.getAllSets(u => {
      this.flashcardSets = u;
    });
  }
};
</script>

<style scoped>
nav .row {
  margin: 0 !important;
}
</style>
