<template>
  <div class="flashcard-set">
    <div class="column six"></div>
    <div class="column ten">
      <div class="row">{{ this.flashcardSet.name }}</div>
      <div class="row">
        <small>{{ this.flashcardSet.user.username }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlashcardSetCard",
  props: {
    flashcardSet: Object
  }
};
</script>

<style>
</style>