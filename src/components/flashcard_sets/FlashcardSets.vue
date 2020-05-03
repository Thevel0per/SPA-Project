<template>
  <div class="row flashcards-sets-content">
    <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
      <div class="row">
        <div class="w-100">
          <form class="sets-search-form">
            <div class="w-75 row mx-auto">
              <input
                class="form-control col-sm-12 col-md-8 w-75 mx-auto"
                type="text"
                placeholder="Search"
                v-model="search"
              />
              <input
                v-on:click="showSearch"
                class="btn btn-outline-success my-2 col-sm-12 offset-md-1 col-md-3"
                type="submit"
                value="Search"
              />
            </div>
          </form>
          <div class="row w-75 mx-auto">
            <button
              class="col-sm-12 col-md-6 offset-md-3 btn btn-outline-success"
              @click="updateSetsList"
            >
              Show All Sets
            </button>
          </div>
        </div>
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
import FlashcardSetCard from "../shared/FlashcardSetCard.vue";

export default {
  name: "FlashcardSets",
  components: {
    FlashcardSetCard
  },
  data() {
    return {
      flashcardSets: [],
      search: ""
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
    },
    showSearch(e) {
      e.preventDefault();
      this.$root.db.flashcardsSets.getFilteredSearch(u => {
        this.flashcardSets = u;
      }, this.search);
    }
  }
};
</script>

<style scoped>
form input {
  margin: 10px 0;
}
</style>
