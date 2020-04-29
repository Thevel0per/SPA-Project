<template>
  <div class="row justify-content-center">
    <div class="col-md-3">
        <div class="row">
        <div class="flashcard-set card bg-dark">
            <div class="card-body text-light">
                <div class="row justify-content-center">
                  {{ $route.params.setname }}
                </div><br>
                <div class="row justify-content-center">
                  <button class="btn btn-outline-success" @click="changeEdit()">
                    Edit
                  </button>
                </div>
            </div>
        </div>
        </div>
        <div class="row" v-for="(card, index) in flashcards" :key="index">
        <flashcard :flashcard="card" :edit="edit" :reload="reload" />
        </div>
        <div class="row" v-if="edit">
          <div class="flashcard-set card bg-dark">
            <div class="card-body text-light">
              <div class="row justify-content-center">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Word"
                  v-model="word"
                />  
              </div><br>
              <div class="row justify-content-center">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Translated word"
                  v-model="translated_word"
                />  
              </div><br>
              <div class="row justify-content-center">
                <button type="submit" class="btn btn-outline-success" @click="addFlashcard()">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>


<script>
import Flashcard from "./Flashcard.vue";

export default {
  name: "FlashcardSet",
  components: {
    Flashcard
  },
  data() {
    return {
      flashcards: [],
      word: '',
      translated_word: '',
      edit: false,
      reload: false
    };
  },
  methods:{
    addFlashcard(){
      console.log(this.$route.params.ref.id);
      this.$root.db.flashcard.setNewFlashcard(this.$route.params.ref, this.word, this.translated_word);
      this.$root.db.flashcards.getFlashcardsForSet(this.$route.params.ref ,u => {
      this.flashcards = u;
    });
    },
    changeEdit(){
      if(this.edit == false) this.edit = true;
      else this.edit = false;
    }
  },
  mounted: function() {
    this.$root.db.flashcards.getFlashcardsForSet(this.$route.params.ref ,u => {
      this.flashcards = u;
    });
  }
};
</script>