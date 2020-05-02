<template>
  <div class="flashcard-set card bg-dark">
    <div class="flashcard card-body text-light text-center h-100">
      <div class="row justify-content-center h-100">
        <div class="prev-button col-md-3 my-auto" @click="prevCard">
          <i class="fas fa-3x fa-arrow-left"></i>
        </div>
        <div class="word col-md-6 my-auto" @click="reverseCard">{{ this.showedWord }}</div>
        <div class="next-button col-md-3 my-auto" @click="nextCard">
          <i class="fas fa-3x fa-arrow-right"></i>
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
}

div.word {
  font-size: 3em;
}

button {
  background: none;
  color: white;
  border: none;
  margin: 0 5px;
  width: 50px;
}

.next-button:hover {
  cursor: pointer;
}

.prev-button:hover {
  cursor: pointer;
}
</style>
