<template>
  <div class="flashcard-set card bg-dark">
    <div class="card-body text-light">
      <div class="row">
        <div class="col-md-6 offset-md-1">
          <div class="row">{{ this.flashcardSet.name }}</div>
          <div class="row">
            <small>{{ this.flashcardSet.user.username }}</small>
          </div>
        </div>
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
