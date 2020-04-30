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
          <button><i class="far fa-2x fa-eye" @click="toCardSet()"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router/index";

export default {
  name: "FlashcardSetCard",
  props: {
    flashcardSet: Object
  },
  methods: {
    toCardSet(){
      router.push({ name: "flashcard_set", params: { id: this.flashcardSet.ref.id, setname: this.flashcardSet.name, ref: this.flashcardSet.ref }})
    }
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