<template>
  <div class="flashcard-set card bg-dark">
    <div class="card-body text-light">
          <div class="row justify-content-center">{{this.flashcard[0].word}}</div><br>
          <div class="row justify-content-center">{{this.flashcard[0].translated_word}}</div>
          <div v-if="edit"> 
            <br>
            <div class="row justify-content-center">
              <button class="btn btn-outline-success" @click="deleteFlashcard()">
                Delete
              </button>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flashcard",
  props: {
    flashcard: Array,
    edit: Boolean
  },
    methods:{
    deleteFlashcard(){
      console.log("aaa");
      this.$root.db.flashcard.deleteFlashcard(this.flashcard[1]);
    }
  }
};
</script>