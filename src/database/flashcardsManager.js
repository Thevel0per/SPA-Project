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
          let element = [];
          element.push(doc.data());
          element.push(doc.id);
          flashcards.push(element);
        });
        callback(flashcards);
      });
  },
  getSetById: (id, callback) => {
    db()
    .collection("flashcards_sets")
    .doc(id)
    .get()
    .then(snapshot => {
      callback(snapshot);
    });
  }
};

export default flashcardsManager;
