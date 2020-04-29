import db from "./db";

var flashcardManager = {
  setNewFlashcard: (ref, word, translated_word) => {
    db().collection("flashcards").add({
        flashcards_set: ref,
        word: word,
        translated_word: translated_word
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  },
  deleteFlashcard: (id) => {
    db().collection("flashcards").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  }
};

export default flashcardManager;