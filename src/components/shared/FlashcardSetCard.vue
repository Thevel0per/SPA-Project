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
        <div class="col-md-4 offset-md-1">
          <button><i class="far fa-2x fa-trash-alt"></i></button>
          <button><i class="far fa-2x fa-edit"></i></button>
          <router-link :to="{ name: 'flashcard_set', params: { id: this.flashcardSet.ref.id }}">
            <i class="far fa-2x fa-eye"></i>
          </router-link>
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

<style scoped>
button,
a {
  background: none;
  color: white;
  border: none;
  margin: 0 5px;
  width: 50px;
}
</style>