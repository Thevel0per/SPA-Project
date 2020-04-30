<template>
  <div class="flashcard-set card bg-dark">
    <div class="card-body text-light">
          <div class="row justify-content-center">{{this.flashcard[0].word}}</div><br>
          <div class="row justify-content-center">{{this.flashcard[0].translated_word}}</div>
          <div v-if="edit"> 
            <br>
            <div class="row justify-content-center">
              <button @click="deleteFlashcard()">
                <i class="far fa-2x fa-trash-alt"></i>
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
      this.$emit("deleteflashcard");
      this.$root.db.flashcard.deleteFlashcard(this.flashcard[1]);
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