<template>
  <div class="ui middle aligned grid">
    <div class="flashcard-sets row">
      <div class="four wide column">
        <div class="row">dupa</div>
      </div>
      <div class="eight wide column">
        <div class="row">
          <SearchBar />
        </div>
        <div class="row" v-for="(set, index) in flashcardSets" :key="index">
          <FlashcardSetCard :flashcardSet="set" />
        </div>
      </div>
      <div class="four wide column"></div>
    </div>
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
      flashcardSets: [
        {
          name: "Germanski - Muzyka",
          user: {
            id: 1,
            username: "User-1"
          }
        }
      ]
    };
  },
  mounted: function() {
    this.$root.db.flashcardsSets.getAllSets(u => {
      this.flashcardSets = u;
    });
  }
};
</script>

<style>
.grid .flashcard-sets {
  margin-top: 2%;
}

.flashcard-set {
  border-radius: 5px;
  width: 70%;
  justify-content: center;
  margin: 50px auto;
  height: 40px;
  background-color: rgb(232, 234, 246);
}
</style>
