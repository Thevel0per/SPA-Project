<template>
  <div class="flashcard-set card bg-dark">
    <div class="card-body text-light">
          <div class="row justify-content-center">{{this.flashcard.word}}</div><br>
          <div class="row justify-content-center">{{this.flashcard.translated_word}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Flashcard",
  props: {
    flashcard: Object
  },
};
</script>