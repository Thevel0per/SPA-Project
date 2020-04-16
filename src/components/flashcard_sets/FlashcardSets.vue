<template>
  <div class="row flashcards-sets-content">
    <div class="col-md-3">
      <div class="row">dupa</div>
    </div>
    <div class="col-md-6">
      <div class="row">
        <SearchBar />
      </div>
      <div class="row" v-for="(set, index) in flashcardSets" :key="index">
        <FlashcardSetCard :flashcardSet="set" />
      </div>
    </div>
    <div class="col-md3"></div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import FlashcardSetCard from "./FlashcardSetCard.vue";

export default {
  name: "Flashcards",
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

