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
        
        <div class="col">
          <div
            class="btn btn-outline-success btn-lg w-100"
            role="button"
            v-on:click="toCardSet()"
          >
            Show set
          </div>
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
      router.push({ name: "flashcard_set", params: { setname: this.flashcardSet.name, ref: this.flashcardSet.ref }})
    }
  }
};
</script>
