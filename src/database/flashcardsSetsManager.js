import db from "./db";

var flashcardsSetsManager = {
  getAllSets: callback => {
    db()
      .collection("flashcards_sets")
      .get()
      .then(snapshot => {
        let sets = [];
        snapshot.forEach(doc => {
          let set = doc.data();
          set.ref = doc.ref;
          set.user.get().then(u => {
            set.user = u.data();
          });
          sets.push(set);
        });
        callback(sets);
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

export default flashcardsSetsManager;
