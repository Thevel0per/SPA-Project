<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-md-12 my-auto">
        <h2 align="center">{{ this.setName }}</h2>
        <div class="w-50 mx-auto">
          <LearningFlashcard
            v-if="currentFlashcard > -1"
            :flashcard="flashcards[currentFlashcard]"
            @prev-card="prevCard"
            @next-card="nextCard"
            :translation="translation"
          ></LearningFlashcard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LearningFlashcard from "./LearningFlashcard.vue";

export default {
  name: "LearnFlashcardSet",
  components: {
    LearningFlashcard
  },
  data: function() {
    return {
      setName: "",
      flashcards: [],
      currentFlashcard: -1,
      translation: false
    };
  },
  methods: {
    nextCard: function() {
      if (this.currentFlashcard < this.flashcards.length - 1) {
        this.currentFlashcard++;
      }
    },
    prevCard: function() {
      if (this.currentFlashcard > 0) {
        this.currentFlashcard--;
      }
    }
  },
  mounted: function() {
    this.$root.db.flashcardsSets.getSetById(this.$route.params.set_id, set => {
      this.setName = set.data().name;
      this.$root.db.flashcards.getFlashcardsForSet(set.ref, i => {
        this.flashcards = i;
        this.currentFlashcard = 0;
      });
    });
  }
};
</script>

<style scoped>
.flashcard {
  width: 30% !important;
  height: 200px !important;
}

h2 {
  padding: 15px 0;
}
</style>
