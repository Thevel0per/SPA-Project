<template>
  <div class="row justify-content-center">
    <div class="col-md-3">
        <div class="flashcard-set card bg-dark">
            <div class="card-body text-light">
                <div class="row justify-content-center">{{ $route.params.setname }}</div>
            </div>
        </div>
        <div class="row" v-for="(card, index) in flashcards" :key="index">
        <flashcard :flashcard="card" />
        </div>
    </div>
  </div>
</template>


<script>
import Flashcard from "./Flashcard.vue";

export default {
  name: "FlashcardSet",
components: {
    Flashcard
  },
  data() {
    return {
      flashcards: []
    };
  },
  mounted: function() {
    this.$root.db.flashcards.getFlashcardsForSet(this.$route.params.ref ,u => {
      this.flashcards = u;
    });
  }
};
</script>