<template>
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6">
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
              <router-link
                :to="{
                  name: 'quiz_path',
                  params: { set_id: this.$route.params.id }
                }"
              >
                <i class="fas fa-2x fa-graduation-cap"></i>
              </router-link>
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
            <div v-if="translate" class="row justify-content-center">
              Translate word:
            </div>
            <div class="row justify-content-center">
              <div class="dropdown">
                <button
                  v-if="translate"
                  class="mx-auto btn btn-outline-success  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ this.language.name }}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a
                    class="dropdown-item"
                    @click="changeLanguage(auto_language)"
                  >
                    Auto
                  </a>
                  <a
                    v-for="item in supported_languages"
                    :key="item.name"
                    class="dropdown-item"
                    @click="changeLanguage(item)"
                  >
                    {{ item.name }}
                  </a>
                </div>
              </div>

              <div class="dropdown">
                <button
                  v-if="translate"
                  class="mx-auto btn btn-outline-success  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ this.target_language.name }}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a
                    v-for="item in supported_languages"
                    :key="item.name"
                    class="dropdown-item"
                    @click="changeTargetLanguage(item)"
                  >
                    {{ item.name }}
                  </a>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <button v-if="translate" @click="translateWord()">
                <i class="fas fa-2x fa-check"></i>
              </button>
            </div>
            <br v-if="translate" />
            <div class="row justify-content-center">
              <button @click="addFlashcard()">
                <i class="fas fa-2x fa-plus"></i>
              </button>
              <button @click="changeTranslate()">
                <i class="fas fa-2x fa-language"></i>
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
      translate: false,
      language: { name: "from", code: "" },
      target_language: { name: "to", code: "" },
      supported_languages: [
        { name: "English", code: "en" },
        { name: "Polish", code: "pl" },
        { name: "German", code: "de" },
        { name: "French", code: "fr" }
      ],
      auto_language: { name: "Auto", code: "auto" },
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
    changeTranslate() {
      if (this.translate == false) this.translate = true;
      else this.translate = false;
    },
    updateEvent() {
      this.$root.db.flashcardsSets.getSetById(this.$route.params.id, set => {
        this.setname = set.data().name;
        this.$root.db.flashcards.getFlashcardsForSet(set.ref, i => {
          this.flashcards = i;
        });
      });
    },
    changeLanguage(language) {
      this.language = language;
    },
    changeTargetLanguage(target_language) {
      this.target_language = target_language;
    },
    translateWord() {
      this.translated_word = "Please wait";
      if (this.language.code == "en" || this.target_language.code == "en") {
        this.$root.db.flashcards.translate(
          this.language.code,
          this.target_language.code,
          this.word,
          translated_word => {
            this.translated_word = JSON.parse(
              translated_word
            ).outputs[0].output;
          }
        );
      } else {
        this.$root.db.flashcards.translate(
          this.language.code,
          "en",
          this.word,
          translated_en_word => {
            this.translated_word = JSON.parse(
              translated_en_word
            ).outputs[0].output;

            this.$root.db.flashcards.translate(
              "en",
              this.target_language.code,
              JSON.parse(translated_en_word).outputs[0].output,
              translated_word => {
                this.translated_word = JSON.parse(
                  translated_word
                ).outputs[0].output;
              }
            );
          }
        );
      }
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
a.dropdown-item {
  color: black !important;
}
#dropdownMenuButton {
  background: white;
  color: black;
  margin: 10px 10px !important;
  width: 120px;
}
</style>
