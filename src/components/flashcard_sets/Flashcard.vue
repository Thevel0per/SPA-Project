<template>
  <div class="flashcard-set card bg-dark">
    <div class="card-body text-light">
          <div class="row justify-content-center">{{this.flashcard[0].word}}</div>
          <br v-if="edit_card">
          <input
            type="text"
            class="form-control"
            placeholder="New word"
            v-model="word"
            v-if="edit_card"
          /><br>
          <div class="row justify-content-center">{{this.flashcard[0].translated_word}}</div>
          <br v-if="edit_card">
          <input
            type="text"
            class="form-control"
            placeholder="New translated word"
            v-model="translated_word"
            v-if="edit_card"
          />
          <div v-if="edit_set"> 
            <br>
            <div class="row justify-content-center">
              <button v-if="edit_card==false" @click="deleteFlashcard()">
                <i class="far fa-2x fa-trash-alt"></i>
              </button>
              <button v-if="edit_card" @click="changeEdit()">
                <i class="fas fa-2x fa-times"></i>
              </button>
             <button v-else @click="changeEdit()">
                <i class="far fa-2x fa-edit"></i>
              </button>
              <button v-if="edit_card" @click="updateFlashcard()">
                <i class="fas fa-2x fa-check"></i>
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
    edit_set: Boolean,
  },
    data() {
    return {
      edit_card: false,
      word: this.flashcard[0].word,
      translated_word: this.flashcard[0].translated_word
    };
  },
  methods:{
    deleteFlashcard(){
      this.$emit("updateset");
      this.$root.db.flashcard.deleteFlashcard(this.flashcard[1]);
    },
    changeEdit(){
      if(this.edit_card == false) this.edit_card = true;
      else this.edit_card = false;
    },
    updateFlashcard(){
      console.log("update");

      this.$root.db.flashcard.updateFlashcard(this.flashcard[1], this.word, this.translated_word);

      this.edit_card = false;
      this.$emit("updateset");
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