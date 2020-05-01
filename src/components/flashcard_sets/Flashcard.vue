<template>
  <div class="flashcard-set card bg-dark">
    <div class="card-body text-light">
          <div class="row justify-content-center">{{this.flashcard.word}}</div>
          <br v-if="edit_card">
          <input
            type="text"
            class="form-control"
            placeholder="New word"
            v-model="word"
            v-if="edit_card"
          /><br>
          <div class="row justify-content-center">{{this.flashcard.translated_word}}</div>
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


            <div v-if="translate" class="row justify-content-center">
                Translate word:
              </div>
                <div class="row justify-content-center">
                  <div class="dropdown">
                    <button v-if="translate" class="mx-auto btn btn-outline-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {{this.language.name}}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" @click="changeLanguage(auto_language)">Auto</a>
                      <a v-for="(item) in supported_languages" :key="item.name" class="dropdown-item" @click="changeLanguage(item)">{{item.name}}</a>
                    </div>
                  </div>

                  <div class="dropdown">
                    <button v-if="translate" class="mx-auto btn btn-outline-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {{this.target_language.name}}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a v-for="(item) in supported_languages" :key="item.name" class="dropdown-item" @click="changeTargetLanguage(item)">{{item.name}}</a>
                    </div>
                  </div>
                </div>
              <div class="row justify-content-center">
                <button v-if="translate" @click="translateWord()">
                  <i class="fas fa-2x fa-check"></i>
                </button>
              </div>
              <br v-if="translate">


            <div class="row justify-content-center">
              <button v-if="edit_card==false" @click="deleteFlashcard()">
                <i class="far fa-2x fa-trash-alt"></i>
              </button>
              <button v-if="edit_card" @click="changeEdit()">
                <i class="fas fa-2x fa-times"></i>
              </button>
              <button v-if="edit_card" @click="changeTranslate()">
                  <i class="fas fa-2x fa-language"></i>
              </button>
             <button v-if="edit_card==false" @click="changeEdit()">
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
    flashcard: Object,
    edit_set: Boolean
  },
  data() {
    return {
      edit_card: false,
      word: this.flashcard.word,
      translated_word: this.flashcard.translated_word,
      translate: false,
      language: {name: "from", code: ''},
      target_language: {name: "to", code: ''},
      supported_languages: [ 
        {name: "English", code: "en"},
        {name: "Polish", code: "pl"},
        {name: "German", code: "de"},
        {name: "French", code: "fr"}
        ],
      auto_language: {name: "Auto", code: 'auto'}
    };
  },
  methods: {
    deleteFlashcard() {
      this.$emit("updateset");
      this.$root.db.flashcards.deleteFlashcard(this.flashcard.id);
    },
    changeEdit() {
      if (this.edit_card == false) this.edit_card = true;
      else this.edit_card = false;
    },
    updateFlashcard() {
      console.log("update");

      this.$root.db.flashcards.updateFlashcard(
        this.flashcard.id,
        this.word,
        this.translated_word
      );

      this.edit_card = false;
      this.$emit("updateset");
    },
    changeTranslate(){
      if(this.translate == false) this.translate = true;
      else this.translate = false;
    },
    changeLanguage(language){
      this.language = language;
      console.log("aaa");
    },
    changeTargetLanguage(target_language){
      this.target_language = target_language;
    },
    translateWord(){
      this.translated_word = "Please wait";
        if(this.language.code == 'en' || this.target_language.code == 'en'){
        this.$root.db.flashcards.translate(this.language.code, this.target_language.code, this.word, translated_word => {
          console.log("abc",JSON.parse(translated_word).outputs[0].output);
          this.translated_word = JSON.parse(translated_word).outputs[0].output;
        });
      }
      else {
        this.$root.db.flashcards.translate(this.language.code, 'en', this.word, translated_en_word => {
          console.log("abc",JSON.parse(translated_en_word).outputs[0].output);
          this.translated_word = JSON.parse(translated_en_word).outputs[0].output;

         this.$root.db.flashcards.translate('en', this.target_language.code, JSON.parse(translated_en_word).outputs[0].output, translated_word => {
            console.log("abc",JSON.parse(translated_word).outputs[0].output);
            this.translated_word = JSON.parse(translated_word).outputs[0].output;
          });

        });
      }
    }
  },
  
};
</script>

<style scoped>
button {
  background: none;
  color: white;
  border: none;
  margin: 0 5px;
  width: 50px;
}
#dropdownMenuButton {
  background: white;
  color: black; 
  margin: 10px 10px!important;
  width: 120px;
}
</style>
