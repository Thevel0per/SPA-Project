<template>
  <div class="row flashcards-sets-content">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <div class="row">
        <SearchBar />
      </div>
      <div class="row" v-for="(set, index) in flashcardSets" :key="index">
        <FlashcardSetCard :flashcardSet="set" @set-destroyed="updateSetsList" />
      </div>
      <div class="row">
        <router-link
          to="/flashcard_sets/new"
          class="mx-auto btn btn-outline-success w-50"
        >
          New Set
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../shared/SearchBar.vue";
import FlashcardSetCard from "../shared/FlashcardSetCard.vue";

export default {
  name: "FlashcardSets",
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
  },
  methods: {
    updateSetsList: function() {
      this.$root.db.flashcardsSets.getAllSets(u => {
        this.flashcardSets = u;
      });
    }
  }
};
</script>
