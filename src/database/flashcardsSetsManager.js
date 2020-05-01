import db from "./db";

const collectionName = "flashcards_sets";
var flashcardsSetsManager = {
  getAllSets: callback => {
    db()
      .collection(collectionName)
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
  },
  createSet: (setName, callback) => {
    db()
      .collection(collectionName)
      .add({
        name: setName
      })
      .then(() => {
        callback();
      });
  },
  updateSet: (setName, documentId, callback) => {
    db()
      .collection(collectionName)
      .doc(documentId)
      .update({
        name: setName
      })
      .then(() => {
        callback();
      });
  },
  destroySet: (documentId, callback) => {
    db()
      .collection(collectionName)
      .doc(documentId)
      .delete()
      .then(() => {
        callback();
      });
  }
};

export default flashcardsSetsManager;
