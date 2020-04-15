import db from "./db";

var flashcardsManager = {
  getFlashcardsForSet: (ref, callback) => {
    db()
      .collection("flashcards")
      .where("flashcards_set", "==", ref)
      .get()
      .then(snapshot => {
        let flashcards = [];
        snapshot.forEach(doc => {
          flashcards.push(doc.data());
        });
        callback(flashcards);
      });
  }
};

export default flashcardsManager;
