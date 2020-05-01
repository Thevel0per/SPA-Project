<template>
  <div class="row justify-content-center">
    <div class="col-md-3">
      <div class="row">
        <div class="flashcard-set card bg-dark">
          <div class="card-body text-light">
            <div class="row justify-content-center">
              {{ setname }}
            </div>
            <br />
            <div class="row justify-content-center">
              <router-link
                :to="{
                  name: 'learn_set_path',
                  params: { set_id: this.$route.params.id }
                }"
              >
                <i class="fas fa-2x fa-book-reader"></i>
              </router-link>
              <button>
                <i class="fas fa-2x fa-graduation-cap"></i>
              </button>
              <button @click="changeEdit()" v-if="owner">
                <i class="far fa-2x fa-edit"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-for="(card, index) in flashcards" :key="index">
        <flashcard
          v-on:updateset="updateEvent"
          :flashcard="card"
          :edit_set="edit_set"
        />
      </div>
      <div class="row" v-if="edit_set">
        <div class="flashcard-set card bg-dark">
          <div class="card-body text-light">
            <div class="row justify-content-center">
              Add flashcard:
            </div>
            <br />
            <input
              type="text"
              class="form-control"
              placeholder="Word"
              v-model="word"
            />
            <br />
            <input
              type="text"
              class="form-control"
              placeholder="Translated word"
              v-model="translated_word"
            />
            <br />
            <div class="row justify-content-center">
              <button @click="addFlashcard()">
                <i class="fas fa-2x fa-plus"></i>
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
      word: "",
      translated_word: "",
      edit_set: false,
      setname: "",
      owner: false
    };
  },
  methods: {
    addFlashcard() {
      this.$root.db.flashcardsSets.getSetById(this.$route.params.id, set => {
        this.$root.db.flashcards.setNewFlashcard(
          set.ref,
          this.word,
          this.translated_word
        );
        this.$root.db.flashcards.getFlashcardsForSet(set.ref, i => {
          this.flashcards = i;
        });
      });
    },
    changeEdit() {
      if (this.edit_set == false) this.edit_set = true;
      else this.edit_set = false;
    },
    updateEvent() {
      this.$root.db.flashcardsSets.getSetById(this.$route.params.id, set => {
        this.setname = set.data().name;
        this.$root.db.flashcards.getFlashcardsForSet(set.ref, i => {
          this.flashcards = i;
        });
      });
    }
  },
  mounted: function() {
    this.$root.db.flashcardsSets.getSetById(this.$route.params.id, set => {
      this.setname = set.data().name;
      this.$root.db.flashcards.getFlashcardsForSet(set.ref, i => {
        this.flashcards = i;
      });
    });

    this.$root.db.users.getFlashCardSetOwnerId(
      this.$route.params.id,
      userId => {
        this.owner = this.$root.loggedUser.uid == userId;
      }
    );
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
