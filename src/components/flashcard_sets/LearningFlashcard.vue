<template>
  <div class="flashcard-set card bg-dark">
    <div class="flashcard card-body text-light text-center h-100">
      <div class="row justify-content-center h-100">
        <div class="prev-button col-md-2 my-auto text-center" @click="prevCard">
          <i class="fas fa-2x fa-arrow-left"></i>
        </div>
        <div class="word col-md-8 my-auto" @click="reverseCard">
          {{ this.showedWord }}
        </div>
        <div class="next-button col-md-2 my-auto text-center" @click="nextCard">
          <i class="fas fa-2x fa-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flashcard",
  props: {
    flashcard: Object,
    translation: Boolean
  },
  methods: {
    reverseCard: function() {
      this.translation = !this.translation;
    },
    nextCard: function() {
      this.$emit("next-card");
    },
    prevCard: function() {
      this.$emit("prev-card");
    }
  },
  computed: {
    showedWord: function() {
      if (this.translation) {
        return this.flashcard.translated_word;
      } else {
        return this.flashcard.word;
      }
    }
  }
};
</script>

<style scoped>
div.card {
  height: 250px;
  width: 100%;
}

div.word {
  font-size: 3em;
}

.next-button:hover {
  cursor: pointer;
}

.prev-button:hover {
  cursor: pointer;
}

@media screen and (max-width: 767px) {
  div.word {
    font-size: 1em;
  }
}

@media screen and (max-width: 1000px) {
  div.word {
    font-size: 2em;
  }
}
</style>
