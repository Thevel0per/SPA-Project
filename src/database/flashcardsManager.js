import db from "./db";
var cards = db().collection("flashcards");
var flashcardsManager = {
  getFlashcardsForSet: (ref, callback) => {
    cards
      .where("flashcards_set", "==", ref)
      .get()
      .then(snapshot => {
        let flashcards = [];
        snapshot.forEach(doc => {
          let element = doc.data();
          element.id = doc.id;
          flashcards.push(element);
        });
        callback(flashcards);
      });
  },
  setNewFlashcard: (ref, word, translated_word) => {
    cards
      .add({
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
  deleteFlashcard: id => {
    cards
      .doc(id)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  },
  updateFlashcard: (id, word, translated_word) => {
    cards
      .doc(id)
      .set(
        {
          word: word,
          translated_word: translated_word
        },
        { merge: true }
      )
      .then(function() {
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        console.error("Error updating document: ", error);
    });
  },
  translate: (language, targetLanguage, word, callback) => {
    let xhr = new XMLHttpRequest();
    let URL = "https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=" + language + "&target=" + targetLanguage + "&input=" + word;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log("response:",this.responseText);
        callback(this.responseText)
      }
    });

    xhr.open("GET", URL);
    xhr.setRequestHeader("x-rapidapi-host", "systran-systran-platform-for-language-processing-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "482cdac65emsh8666d06d1f83e34p1def36jsn80007fcad40b");

    xhr.send();

  } 
};

export default flashcardsManager;
